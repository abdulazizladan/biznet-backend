import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JobsService } from './jobs.service';

@ApiTags('Jobs')
@Controller('jobs')
export class JobsController {

    constructor( private JobsService: JobsService){

    }

    @Get()
    findAll() {

    }

    @Get('/:id')
    findOne( id: number) {

    }

    @Post()
    create() {

    }

    @Put('/:id')
    edit(id: number) {

    }

}
