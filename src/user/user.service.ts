import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor() {}
  userRepository = [
    {
      id: 432,
      name: 'David',
      email: 'david@example.com',
      password: 'Pq1rSv8t',
    },
    { id: 817, name: 'Alice', email: 'alice@test.com', password: 'Kw9xRt5s' },
    {
      id: 125,
      name: 'Charlie',
      email: 'charlie@demo.com',
      password: 'Mx0zLw6u',
    },
  ];
  create(createUserDto: CreateUserDto) {
    this.userRepository.push(createUserDto);
    return createUserDto;
  }

  findAll() {
    return this.userRepository;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
