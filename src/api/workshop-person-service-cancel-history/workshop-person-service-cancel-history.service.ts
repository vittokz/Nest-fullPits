import { Injectable } from '@nestjs/common';
import { WorkshopPersonServiceCancelHistory } from 'src/database/entities/WorkshopPersonServiceCancelHistory';

@Injectable()
export class WorkshopPersonServiceCancelHistoryService {
  create(
    createWorkshopPersonServiceCancelHistoryDto: WorkshopPersonServiceCancelHistory,
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
    updateWorkshopPersonServiceCancelHistoryDto: WorkshopPersonServiceCancelHistory,
  ) {
    return `This action updates a #${id} workshopPersonServiceCancelHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} workshopPersonServiceCancelHistory`;
  }
}
