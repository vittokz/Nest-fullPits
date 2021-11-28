import { Test, TestingModule } from '@nestjs/testing';
import { TypeLubricantService } from './type-lubricant.service';

describe('TypeLubricantService', () => {
  let service: TypeLubricantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeLubricantService],
    }).compile();

    service = module.get<TypeLubricantService>(TypeLubricantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
