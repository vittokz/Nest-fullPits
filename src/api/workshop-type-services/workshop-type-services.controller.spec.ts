import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopTypeServicesController } from './workshop-type-services.controller';
import { WorkshopTypeServicesService } from './workshop-type-services.service';

describe('WorkshopTypeServicesController', () => {
  let controller: WorkshopTypeServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkshopTypeServicesController],
      providers: [WorkshopTypeServicesService],
    }).compile();

    controller = module.get<WorkshopTypeServicesController>(WorkshopTypeServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
