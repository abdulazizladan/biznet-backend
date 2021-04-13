import { Module } from '@nestjs/common';
import { PersonalAddressController } from './personal-address.controller';
import { PersonalAddressService } from './personal-address.service';

@Module({
  controllers: [PersonalAddressController],
  providers: [PersonalAddressService]
})
export class PersonalAddressModule {}
