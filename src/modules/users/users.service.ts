import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from './dto';
import { AppError } from 'src/common/errors';
// import { users } from 'src/moks/index';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userRepository: typeof User,
  ) {}
  // async findAll(): Promise<User[]> {
  //   return this.userRepository.findAll();
  // }
  // findOne(id: string): Promise<User> {
  //   return this.userRepository.findOne({
  //     where: {
  //       id,
  //     },
  //   });
  // }
  // async remove(id: string): Promise<void> {
  //   const user = await this.findOne(id);
  //   await user.destroy();
  // }
  // getUsers() {
  //   return users;
  // }
  async hashPassword(password) {
    return bcrypt.hash(password, 10);
  }

  async findUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async createUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
    const existUser = this.findUserByEmail(dto.email);
    if (existUser) throw new BadRequestException(AppError.USER_EXIST);

    dto.password = await this.hashPassword(dto.password);
    await this.userRepository.create({
      firstName: dto.firstName,
      lastName: dto.lastName,
      password: dto.password,
      email: dto.email,
      age: dto.age,
      gender: dto.gender,
      problems: dto.problems,
    });
    return dto;
  }

  async migrateUsers() {
    const genders = ['male', 'female'];
    const problems = [true, false];
    for (let i = 0; i < 1000000; i++) {
      const user = {
        firstName: `User_firstName${i + 1}`,
        lastName: `User_lastName${i + 1}`,
        password: `Password_User${i + 1}`,
        email: `Email_User${i + 1}`,
        age: Math.floor(Math.random() * 80) + 18,
        gender: genders[Math.floor(Math.random() * genders.length)],
        problems: problems[Math.floor(Math.random() * problems.length)],
      };
      await this.userRepository.create(user);
    }
  }
}
