import { Controller, Post, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessagesService } from './messages.service';

@ApiTags('Messages')
@Controller('messages')
export class MessagesController {

    constructor( private messagesService: MessagesService ){

    }

    @Post('send')
    send(){
        
    }

    @Get('read')
    read(){

    }
}
