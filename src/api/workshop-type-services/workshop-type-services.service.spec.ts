import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopTypeServicesService } from './workshop-type-services.service';

describe('WorkshopTypeServicesService', () => {
  let service: WorkshopTypeServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkshopTypeServicesService],
    }).compile();

    service = module.get<WorkshopTypeServicesService>(WorkshopTypeServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
