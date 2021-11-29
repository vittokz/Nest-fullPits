import { Injectable } from '@nestjs/common';
import { PersonWorkshopQualification } from 'src/database/entities/PersonWorkshopQualification';

@Injectable()
export class PersonWorkshopQualificationService {
  create(createPersonWorkshopQualificationDto: PersonWorkshopQualification) {
    return 'This action adds a new personWorkshopQualification';
  }

  findAll() {
    return `This action returns all personWorkshopQualification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personWorkshopQualification`;
  }

  update(
    id: number,
    updatePersonWorkshopQualificationDto: PersonWorkshopQualification,
  ) {
    return `This action updates a #${id} personWorkshopQualification`;
  }

  remove(id: number) {
    return `This action removes a #${id} personWorkshopQualification`;
  }
}
