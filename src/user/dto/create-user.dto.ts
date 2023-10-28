import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IsEmailUserAlreadyExist } from '../decorator/IsEmailUserAlreadyExistConstraint';

export class CreateUserDto {
  @IsString({ message: 'Name is required' })
  name: string;
  @IsNumber({})
  @IsNotEmpty({ message: 'Age is required' })
  age: number;
  @IsEmail({})
  @IsEmailUserAlreadyExist({ message: 'Email already exist' })
  email: string;
  @IsString()
  password: string;
}
