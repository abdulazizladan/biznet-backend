import { Module } from '@nestjs/common';
import { PersonalDataController } from './personal-data.controller';
import { PersonalDataService } from './personal-data.service';

@Module({
  controllers: [PersonalDataController],
  providers: [PersonalDataService]
})
export class PersonalDataModule {}
