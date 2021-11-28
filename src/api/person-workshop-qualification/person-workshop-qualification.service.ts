import { Injectable } from '@nestjs/common';
import { CreatePersonWorkshopQualificationDto } from './dto/create-person-workshop-qualification.dto';
import { UpdatePersonWorkshopQualificationDto } from './dto/update-person-workshop-qualification.dto';

@Injectable()
export class PersonWorkshopQualificationService {
  create(createPersonWorkshopQualificationDto: CreatePersonWorkshopQualificationDto) {
    return 'This action adds a new personWorkshopQualification';
  }

  findAll() {
    return `This action returns all personWorkshopQualification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personWorkshopQualification`;
  }

  update(id: number, updatePersonWorkshopQualificationDto: UpdatePersonWorkshopQualificationDto) {
    return `This action updates a #${id} personWorkshopQualification`;
  }

  remove(id: number) {
    return `This action removes a #${id} personWorkshopQualification`;
  }
}
