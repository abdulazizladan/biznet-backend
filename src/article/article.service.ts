import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs'
import { Article } from './article.model';

@Injectable()
export class ArticleService {

    constructor(){

    }

    private articles: any = [
        {
            id: 0,
            user_id: 0,
            title: 'Poultry',
            body: 'Blah blah blah'
        },
        {
            id: 1,
            user_id: 3,
            title: 'Palm wine',
            body: 'Blah blah more blah'
        }
    ]

    create(){
        return "Created successfully";
    }

    findAll(): any{
        return this.articles;
    }

    findById(): any{
        
    }

    delete(): any{
        
    }

    
}
