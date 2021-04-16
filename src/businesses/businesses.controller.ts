import { Controller, Get, Post, Body } from '@nestjs/common';
import { BusinessesService } from './businesses.service';

@Controller('/businesses')
export class BusinessesController {
    
    constructor( private readonly businessService : BusinessesService){

    }

    @Get()
    findAll() : string{
        return this.businessService.findAll();
    }

    @Get('find')
    find() : string{
        return this.businessService.find(1);
    }

    @Post('add') 
    add( 
        @Body('name') name : string,
        @Body('added_by') added_by: number,
        @Body('description') description: string
    ) : any{
        return this.businessService.addBusiness(name, added_by, description);
        
        
    }

}
