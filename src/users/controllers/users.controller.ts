import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '../services/users.service'

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor( private userService: UsersService ) {}

    @Get()
  getUsers(): any {
    return this.userService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): any{
    return this.userService.findById(Number(id));
  }

}
