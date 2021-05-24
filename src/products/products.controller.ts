import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor( private productsService: ProductsService) {

    }

    @Get()
    findAll() {

    }

    @Get()
    findOne() {

    }

    @Post()
    create() {

    }

    @Put()
    edit() {

    }

    @Delete()
    remove() {

    }
}
