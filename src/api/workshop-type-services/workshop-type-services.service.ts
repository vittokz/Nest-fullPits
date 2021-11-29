import { Injectable } from '@nestjs/common';
import { WorkshopTypeService } from 'src/database/entities/WorkshopTypeService';

@Injectable()
export class WorkshopTypeServicesService {
  create(createWorkshopTypeServiceDto: WorkshopTypeService) {
    return 'This action adds a new workshopTypeService';
  }

  findAll() {
    return `This action returns all workshopTypeServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workshopTypeService`;
  }

  update(id: number, updateWorkshopTypeServiceDto: WorkshopTypeService) {
    return `This action updates a #${id} workshopTypeService`;
  }

  remove(id: number) {
    return `This action removes a #${id} workshopTypeService`;
  }
}
