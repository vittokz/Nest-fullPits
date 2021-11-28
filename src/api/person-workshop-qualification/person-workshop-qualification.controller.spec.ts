import { Test, TestingModule } from '@nestjs/testing';
import { PersonWorkshopQualificationController } from './person-workshop-qualification.controller';
import { PersonWorkshopQualificationService } from './person-workshop-qualification.service';

describe('PersonWorkshopQualificationController', () => {
  let controller: PersonWorkshopQualificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonWorkshopQualificationController],
      providers: [PersonWorkshopQualificationService],
    }).compile();

    controller = module.get<PersonWorkshopQualificationController>(PersonWorkshopQualificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
