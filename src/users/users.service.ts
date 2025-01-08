import { validate } from 'class-validator';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { User } from './users.entity';
import { QueueService } from 'src/queue/queue.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly queueService: QueueService,
  ) {}

  // Create a new user
  async create(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user);
    const errors = await validate(newUser);
    if (errors.length > 0) {
      const errorMessages = errors
        .map((error) => {
          return Object.values(error.constraints).join(', ');
        })
        .join('; ');

      throw new BadRequestException(`Validation failed: ${errorMessages}`);
    }
    const savedUser = await this.userRepository.save(newUser); // Save to the database

    await this.queueService.sendWelcomeMessage(savedUser.userId);

    return savedUser;
  }

  // Retrieve all users
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findAdultUsers(): Promise<User[]> {
    return await this.userRepository.find({
      where: { age: MoreThanOrEqual(18) }, // Find users where age > 18
      order: { age: 'ASC' }, // Sort by age in ascending order
    });
  }
}
