import { Module } from '@nestjs/common';
import { BusinessesController } from './businesses.controller';
import { BusinessesService } from './businesses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './business.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([Business])
  ],
  controllers: [BusinessesController],
  providers: [BusinessesService]
})
export class BusinessesModule {}
