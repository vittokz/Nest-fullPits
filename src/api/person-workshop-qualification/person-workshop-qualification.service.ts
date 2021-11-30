import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonWorkshopQualification } from 'src/database/entities/PersonWorkshopQualification';
import { Repository } from 'typeorm';

@Injectable()
export class PersonWorkshopQualificationService {
  constructor(
    @InjectRepository(PersonWorkshopQualification)
    private Repository: Repository<PersonWorkshopQualification>,
  ) {}
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
