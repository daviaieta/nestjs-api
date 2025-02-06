import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async createUser(user: User) {
    console.log(user);
    return this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
      },
    });
  }
}
