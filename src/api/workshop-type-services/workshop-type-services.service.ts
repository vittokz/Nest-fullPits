import { Injectable } from '@nestjs/common';
import { CreateWorkshopTypeServiceDto } from './dto/create-workshop-type-service.dto';
import { UpdateWorkshopTypeServiceDto } from './dto/update-workshop-type-service.dto';

@Injectable()
export class WorkshopTypeServicesService {
  create(createWorkshopTypeServiceDto: CreateWorkshopTypeServiceDto) {
    return 'This action adds a new workshopTypeService';
  }

  findAll() {
    return `This action returns all workshopTypeServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workshopTypeService`;
  }

  update(id: number, updateWorkshopTypeServiceDto: UpdateWorkshopTypeServiceDto) {
    return `This action updates a #${id} workshopTypeService`;
  }

  remove(id: number) {
    return `This action removes a #${id} workshopTypeService`;
  }
}
