import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workshop } from 'src/database/entities/Workshop';
import { Repository } from 'typeorm';

@Injectable()
export class WorkshopService {
  constructor(
    @InjectRepository(Workshop)
    private Repository: Repository<Workshop>,
  ) {}
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
