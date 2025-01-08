import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsInt,
  Min,
} from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  @IsString()
  @MinLength(3, { message: 'name must not be less than 3' })
  @MaxLength(50, { message: 'name must not be greater than 50' })
  name: string;

  @Column()
  @IsEmail({}, { message: 'email must be an email' })
  email: string;

  @Index()
  @Column()
  @IsInt({ message: 'age must be an integer' })
  @Min(18, { message: 'age must be at least 18' })
  age: number;
}
