import { Body, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Article } from './article.model';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController{

    constructor(private articleService: ArticleService)

    @Post()
    create(@Body()articleEntry: Article): Observable<Article>{
        return this.articleService.create(article);
    }
}
