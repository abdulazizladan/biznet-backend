import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { Article } from './article.model';
import { ArticleService } from './article.service';

@ApiTags('Article')
@Controller('article')
export class ArticleController{

    constructor(private articleService: ArticleService){

    }

    @Get()
    findAll(): string{
        return "All articles";
    }

    @Get('find')
    find(): string{
        return "finding one"
    }


    //@Post()
    //create(@Body()articleEntry: Article): Observable<Article>{
    //    return this.articleService.create(article);
    //}
}
