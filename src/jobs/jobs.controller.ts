import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JobsService } from './jobs.service';

@ApiTags('Jobs')
@Controller('jobs')
export class JobsController {

    constructor( private JobsService: JobsService){

    }

    @Get()
    findAll() {
        return this.JobsService.findAll();
    }

    @Get('/:id')
    findOne( id: number) {
        return this.JobsService.findOne(id);
    }

    @Post()
    create() {
        return this.JobsService.create();
    }

    @Put('/:id')
    edit(id: number) {
        return this.JobsService.edit(id);
    }

    @Delete('/id')
    remove(id: number) {
        return this.JobsService.remove(id);
    }

}
