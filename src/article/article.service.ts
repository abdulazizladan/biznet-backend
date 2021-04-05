import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs'
import { Article } from './article.model';

@Injectable()
export class ArticleService {

    constructor(){

    }

    create( article: Article): Observable<Article>{
        return article;
    }
}
