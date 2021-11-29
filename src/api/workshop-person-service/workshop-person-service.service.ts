import { Injectable } from '@nestjs/common';
import { WorkshopPersonService } from 'src/database/entities/WorkshopPersonService';

@Injectable()
export class WorkshopPersonServiceService {
  create(createWorkshopPersonServiceDto: WorkshopPersonService) {
    return 'This action adds a new workshopPersonService';
  }

  findAll() {
    return `This action returns all workshopPersonService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workshopPersonService`;
  }

  update(id: number, updateWorkshopPersonServiceDto: WorkshopPersonService) {
    return `This action updates a #${id} workshopPersonService`;
  }

  remove(id: number) {
    return `This action removes a #${id} workshopPersonService`;
  }
}
