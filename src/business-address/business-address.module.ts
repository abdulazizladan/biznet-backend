import { Module } from '@nestjs/common';
import { BusinessAddressController } from './business-address.controller';
import { BusinessAddressService } from './business-address.service';

@Module({
  controllers: [BusinessAddressController],
  providers: [BusinessAddressService]
})
export class BusinessAddressModule {}
