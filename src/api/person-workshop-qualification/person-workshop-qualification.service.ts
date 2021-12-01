import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonWorkshopQualification } from 'src/database/entities/PersonWorkshopQualification';
import { WorkshopPersonService } from 'src/database/entities/WorkshopPersonService';
import { Repository } from 'typeorm';

@Injectable()
export class PersonWorkshopQualificationService {
  constructor(
    @InjectRepository(PersonWorkshopQualification)
    private personWorkshopQualificationRepository: Repository<PersonWorkshopQualification>,
    @InjectRepository(WorkshopPersonService)
    private workshopPersonServiceRepository: Repository<WorkshopPersonService>,
  ) {}
  create(personWorkshopQualification: PersonWorkshopQualification) {
    this.workshopPersonServiceRepository
      .findOne({
        id: personWorkshopQualification.workShopPersonService.id,
      })
      .then((result) => {
        result.personWorkshopQualification = personWorkshopQualification;
        this.workshopPersonServiceRepository.save(result);
      });
  }

  findByWorkshopPersonServiceId(workshopPersonServiceId: number) {
    return this.personWorkshopQualificationRepository.find({
      where: {
        workshopPersonService: { id: workshopPersonServiceId },
      },
    });
  }
}
