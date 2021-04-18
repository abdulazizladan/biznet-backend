import { Controller, Post, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { messagesService } from './messages.service';

@ApiTags()
@Controller('messages')
export class MessagesController {

    constructor( private messagesService ){

    }

    @Post('send')
    send(){
        
    }

    @Get('read')
    read(){

    }
}
