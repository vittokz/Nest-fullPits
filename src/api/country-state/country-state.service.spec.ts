import { Test, TestingModule } from '@nestjs/testing';
import { CountryStateService } from './country-state.service';

describe('CountryStateService', () => {
  let service: CountryStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryStateService],
    }).compile();

    service = module.get<CountryStateService>(CountryStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
