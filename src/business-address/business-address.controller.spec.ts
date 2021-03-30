import { Test, TestingModule } from '@nestjs/testing';
import { BusinessAddressController } from './business-address.controller';

describe('BusinessAddressController', () => {
  let controller: BusinessAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessAddressController],
    }).compile();

    controller = module.get<BusinessAddressController>(BusinessAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
