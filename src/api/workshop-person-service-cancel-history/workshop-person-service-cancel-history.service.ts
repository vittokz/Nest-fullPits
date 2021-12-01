import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkshopPersonServiceCancelHistory } from 'src/database/entities/WorkshopPersonServiceCancelHistory';
import { Repository } from 'typeorm';

@Injectable()
export class WorkshopPersonServiceCancelHistoryService {
  constructor(
    @InjectRepository(WorkshopPersonServiceCancelHistory)
    private workshopPersonServiceCancelHistoryRepository: Repository<WorkshopPersonServiceCancelHistory>,
  ) {}
  create(
    workshopPersonServiceCancelHistoryDto: WorkshopPersonServiceCancelHistory,
  ) {
    return 'This action adds a new workshopPersonServiceCancelHistory';
  }

  findAll() {
    return `This action returns all workshopPersonServiceCancelHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workshopPersonServiceCancelHistory`;
  }

  update(
    id: number,
    workshopPersonServiceCancelHistoryDto: WorkshopPersonServiceCancelHistory,
  ) {
    return `This action updates a #${id} workshopPersonServiceCancelHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} workshopPersonServiceCancelHistory`;
  }
}
