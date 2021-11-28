import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopPersonServiceCancelHistoryService } from './workshop-person-service-cancel-history.service';

describe('WorkshopPersonServiceCancelHistoryService', () => {
  let service: WorkshopPersonServiceCancelHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkshopPersonServiceCancelHistoryService],
    }).compile();

    service = module.get<WorkshopPersonServiceCancelHistoryService>(WorkshopPersonServiceCancelHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
