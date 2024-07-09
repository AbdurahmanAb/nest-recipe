import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.prisma.user.create({
        data: {
          name: createUserDto.name,
          email: createUserDto.email,
          role: createUserDto.role,

          phoneNumber: createUserDto.phoneNumber,
          password: createUserDto.password,
        },
      });

      return user;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        const fields = error.meta?.target;
        const fieldMessage = fields
          ? `Unique constraint failed on the fields: ${fields}`
          : 'Unique constraint failed';
        console.error(fieldMessage);
        throw new HttpException(fieldMessage, HttpStatus.CONFLICT);
      } else {
        // Handle other errors or rethrow
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
