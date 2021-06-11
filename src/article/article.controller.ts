import {  Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
//import { Observable } from 'rxjs';
//import { Article } from './article.model';
import { ArticleService } from './article.service';

@ApiTags('Article')
@Controller('article')
export class ArticleController{

    constructor( private articleService: ArticleService ){

    }

    @Post('create')
    create(){
        this.articleService.create();
    }

    @Get()
    findAll(){
        return this.articleService.findAll();
    }

    @Get('/:id')
    findOne(): string{
        return "finding one"
    }

    @Put('edit')
    edit(): string{
        return "edited"
    }

    @Delete()
    remove() {
        return 'deleted';
    }


    //@Post()
    //create(@Body()articleEntry: Article): Observable<Article>{
    //    return this.articleService.create(article);
    //}
}
