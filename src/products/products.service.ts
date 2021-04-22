import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(
    ){}

    findAll() : any{
    }

    find( id: number ){
    }

    addProduct( productData: string ){
        return productData;
    }

    removeProduct( id: number ){
        return 'removing product ' + id;
    }

}
