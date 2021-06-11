import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService{

    findAll(){
        return 'all jobs'
    }

    findOne(id: number){
        return id;
    }

    create() {
        return 'created successfully';
    }

    edit(id: number) {
        return id;
    }

    remove(id: number) {
        return id;
    }
}
