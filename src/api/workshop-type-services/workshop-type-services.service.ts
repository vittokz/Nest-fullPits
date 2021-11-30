import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkshopTypeService } from 'src/database/entities/WorkshopTypeService';
import { Repository } from 'typeorm';

@Injectable()
export class WorkshopTypeServicesService {
  constructor(
    @InjectRepository(WorkshopTypeService)
    private workshopTypeServiceRepository: Repository<WorkshopTypeService>,
  ) {}
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
