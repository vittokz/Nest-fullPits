import { Injectable } from '@nestjs/common';
import { Workshop } from 'src/database/entities/Workshop';

@Injectable()
export class WorkshopService {
  create(createWorkshopDto: Workshop) {
    return 'This action adds a new workshop';
  }

  findAll() {
    return `This action returns all workshop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workshop`;
  }

  update(id: number, updateWorkshopDto: Workshop) {
    return `This action updates a #${id} workshop`;
  }

  remove(id: number) {
    return `This action removes a #${id} workshop`;
  }
}
