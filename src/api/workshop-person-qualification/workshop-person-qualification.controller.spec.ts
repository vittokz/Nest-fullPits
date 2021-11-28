import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopPersonQualificationController } from './workshop-person-qualification.controller';
import { WorkshopPersonQualificationService } from './workshop-person-qualification.service';

describe('WorkshopPersonQualificationController', () => {
  let controller: WorkshopPersonQualificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkshopPersonQualificationController],
      providers: [WorkshopPersonQualificationService],
    }).compile();

    controller = module.get<WorkshopPersonQualificationController>(WorkshopPersonQualificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
