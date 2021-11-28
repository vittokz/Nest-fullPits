import { Test, TestingModule } from '@nestjs/testing';
import { CountryStateController } from './country-state.controller';
import { CountryStateService } from './country-state.service';

describe('CountryStateController', () => {
  let controller: CountryStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryStateController],
      providers: [CountryStateService],
    }).compile();

    controller = module.get<CountryStateController>(CountryStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
