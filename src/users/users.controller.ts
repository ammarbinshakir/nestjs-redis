import {
  Controller,
  Get,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() user: Partial<User>) {
    return this.usersService.create(user);
  }

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @Get('adult')
  getAdultUsers() {
    return this.usersService.findAdultUsers();
  }
}
