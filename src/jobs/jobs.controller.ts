import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JobsService } from './jobs.service';

@ApiTags('Jobs')
@Controller('jobs')
export class JobsController {

    constructor( private JobsService: JobsService){

    }

    @Get()
    getJobs(){

    }

    @Get(':id')
    getJobById(){

    }
}
