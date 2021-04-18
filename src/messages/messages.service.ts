import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {

    findAll(){
        return 'messages';
    }

    findById(){
        return 'message';
    }

    delete(){
        return 'deleting message';
    }
}
