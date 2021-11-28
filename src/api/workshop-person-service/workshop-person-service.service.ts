import { Injectable } from '@nestjs/common';
import { CreateWorkshopPersonServiceDto } from './dto/create-workshop-person-service.dto';
import { UpdateWorkshopPersonServiceDto } from './dto/update-workshop-person-service.dto';

@Injectable()
export class WorkshopPersonServiceService {
  create(createWorkshopPersonServiceDto: CreateWorkshopPersonServiceDto) {
    return 'This action adds a new workshopPersonService';
  }

  findAll() {
    return `This action returns all workshopPersonService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workshopPersonService`;
  }

  update(id: number, updateWorkshopPersonServiceDto: UpdateWorkshopPersonServiceDto) {
    return `This action updates a #${id} workshopPersonService`;
  }

  remove(id: number) {
    return `This action removes a #${id} workshopPersonService`;
  }
}
