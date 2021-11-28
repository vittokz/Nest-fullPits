import { Injectable } from '@nestjs/common';
import { CreateWorkshopPersonQualificationDto } from './dto/create-workshop-person-qualification.dto';
import { UpdateWorkshopPersonQualificationDto } from './dto/update-workshop-person-qualification.dto';

@Injectable()
export class WorkshopPersonQualificationService {
  create(createWorkshopPersonQualificationDto: CreateWorkshopPersonQualificationDto) {
    return 'This action adds a new workshopPersonQualification';
  }

  findAll() {
    return `This action returns all workshopPersonQualification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workshopPersonQualification`;
  }

  update(id: number, updateWorkshopPersonQualificationDto: UpdateWorkshopPersonQualificationDto) {
    return `This action updates a #${id} workshopPersonQualification`;
  }

  remove(id: number) {
    return `This action removes a #${id} workshopPersonQualification`;
  }
}
