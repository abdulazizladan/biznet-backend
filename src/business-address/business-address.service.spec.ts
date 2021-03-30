import { Test, TestingModule } from '@nestjs/testing';
import { BusinessAddressService } from './business-address.service';

describe('BusinessAddressService', () => {
  let service: BusinessAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessAddressService],
    }).compile();

    service = module.get<BusinessAddressService>(BusinessAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
