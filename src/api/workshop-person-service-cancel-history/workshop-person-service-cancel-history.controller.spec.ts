import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopPersonServiceCancelHistoryController } from './workshop-person-service-cancel-history.controller';
import { WorkshopPersonServiceCancelHistoryService } from './workshop-person-service-cancel-history.service';

describe('WorkshopPersonServiceCancelHistoryController', () => {
  let controller: WorkshopPersonServiceCancelHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkshopPersonServiceCancelHistoryController],
      providers: [WorkshopPersonServiceCancelHistoryService],
    }).compile();

    controller = module.get<WorkshopPersonServiceCancelHistoryController>(WorkshopPersonServiceCancelHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
