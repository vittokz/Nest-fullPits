import { Injectable } from '@nestjs/common';
import { WorkshopPersonQualification } from 'src/database/entities/WorkshopPersonQualification';

@Injectable()
export class WorkshopPersonQualificationService {
  create(createWorkshopPersonQualificationDto: WorkshopPersonQualification) {
    return 'This action adds a new workshopPersonQualification';
  }

  findAll() {
    return `This action returns all workshopPersonQualification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workshopPersonQualification`;
  }

  update(
    id: number,
    updateWorkshopPersonQualificationDto: WorkshopPersonQualification,
  ) {
    return `This action updates a #${id} workshopPersonQualification`;
  }

  remove(id: number) {
    return `This action removes a #${id} workshopPersonQualification`;
  }
}
