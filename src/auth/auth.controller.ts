import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    @Post('login')
    login(){
        return [{id: 0}]
    }

    @Post('register')
    register(){

    }
}
