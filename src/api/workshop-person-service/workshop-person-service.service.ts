import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkshopPersonService } from 'src/database/entities/WorkshopPersonService';
import { Repository } from 'typeorm';

@Injectable()
export class WorkshopPersonServiceService {
  constructor(
    @InjectRepository(WorkshopPersonService)
    private workshopPersonServiceRepository: Repository<WorkshopPersonService>,
  ) {}
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
