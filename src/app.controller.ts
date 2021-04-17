import { Controller, Request, Post, UseGuards, Get, Param } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private userService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get()
  getUsers(): any {
    return this.userService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): any{
    return{
      id: Number(id)
    }
  }
}
