import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const userSaved = await this.userRepository.save(createUserDto);
    return userSaved;
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    console.log(await this.userRepository.findOneBy({ id }));

    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  async userExists(
    findOptions: FindOptionsWhere<User> | FindOptionsWhere<User>[],
  ) {
    return !!(await this.userRepository.findOneBy(findOptions));
  }
}
