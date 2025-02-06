import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post('create')
  async createUser(@Body() user: User) {
    const newUser = this.userService.createUser(user);
    return newUser;
  }

  @Get(':id')
  async findUser(@Param('id') id: string) {
    return this.userService.findUser(Number(id));
  }
}
