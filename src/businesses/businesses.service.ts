import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Business } from './business.entity';

@Injectable()
export class BusinessesService {
    
   // businesses : Business[] = [];

   constructor(
    @InjectRepository(Business)
    private businessRepository: Repository<Business>
   ){}

    findAll() : any{
        return this.businessRepository.find();
    }

    find(id: number) : any{
        return this.businessRepository.findOne(id);
    }

    addBusiness(name: string, added_by: number, description: string) {
        //return this.businessRepository.insert(name, added_by, description)
    } 
}
