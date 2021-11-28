import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopPersonServiceController } from './workshop-person-service.controller';
import { WorkshopPersonServiceService } from './workshop-person-service.service';

describe('WorkshopPersonServiceController', () => {
  let controller: WorkshopPersonServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkshopPersonServiceController],
      providers: [WorkshopPersonServiceService],
    }).compile();

    controller = module.get<WorkshopPersonServiceController>(WorkshopPersonServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
