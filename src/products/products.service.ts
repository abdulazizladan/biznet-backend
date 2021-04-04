import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ){}

    findAll() : any{
        return this.productRepository.find()
    }

    find( id: number ){
        return this.productRepository.findOne(id);
    }

    addProduct( productData: string ){
        return productData;
    }

    removeProduct( id: number ){
        return 'removing product ' + id;
    }

}
