import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopPersonQualificationService } from './workshop-person-qualification.service';

describe('WorkshopPersonQualificationService', () => {
  let service: WorkshopPersonQualificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkshopPersonQualificationService],
    }).compile();

    service = module.get<WorkshopPersonQualificationService>(WorkshopPersonQualificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
