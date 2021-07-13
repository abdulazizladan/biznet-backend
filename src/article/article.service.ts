import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs'
import { Article } from './article.model';

@Injectable()
export class ArticleService {

    /**
     * Constructor
     */
    constructor(){

    }

    /**
     * Article fake data
     */
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

    /**
     * 
     * @returns 
     */
    create() {
        return "Created successfully";
    }

    /**
     * 
     * @returns 
     */
    findAll(): any{
        return this.articles;
    }

    /**
     * 
     * @param id 
     */
    findOne( id: number): any{
        
    }

    /**
     * 
     * @param id 
     */
    remove( id: number ): any{
        
    }

    /**
     * 
     * @param id 
     * @param article 
     */
    update( id: number, article: Article) {

    }

    
}
