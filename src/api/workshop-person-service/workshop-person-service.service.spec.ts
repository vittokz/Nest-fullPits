import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopPersonServiceService } from './workshop-person-service.service';

describe('WorkshopPersonServiceService', () => {
  let service: WorkshopPersonServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkshopPersonServiceService],
    }).compile();

    service = module.get<WorkshopPersonServiceService>(WorkshopPersonServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
