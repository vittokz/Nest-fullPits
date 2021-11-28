import { Test, TestingModule } from '@nestjs/testing';
import { TypeLubricantController } from './type-lubricant.controller';
import { TypeLubricantService } from './type-lubricant.service';

describe('TypeLubricantController', () => {
  let controller: TypeLubricantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeLubricantController],
      providers: [TypeLubricantService],
    }).compile();

    controller = module.get<TypeLubricantController>(TypeLubricantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
