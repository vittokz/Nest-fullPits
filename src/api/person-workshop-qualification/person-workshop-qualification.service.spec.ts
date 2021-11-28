import { Test, TestingModule } from '@nestjs/testing';
import { PersonWorkshopQualificationService } from './person-workshop-qualification.service';

describe('PersonWorkshopQualificationService', () => {
  let service: PersonWorkshopQualificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonWorkshopQualificationService],
    }).compile();

    service = module.get<PersonWorkshopQualificationService>(PersonWorkshopQualificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
