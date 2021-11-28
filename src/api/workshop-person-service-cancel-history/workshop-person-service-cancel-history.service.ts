import { Injectable } from '@nestjs/common';
import { CreateWorkshopPersonServiceCancelHistoryDto } from './dto/create-workshop-person-service-cancel-history.dto';
import { UpdateWorkshopPersonServiceCancelHistoryDto } from './dto/update-workshop-person-service-cancel-history.dto';

@Injectable()
export class WorkshopPersonServiceCancelHistoryService {
  create(createWorkshopPersonServiceCancelHistoryDto: CreateWorkshopPersonServiceCancelHistoryDto) {
    return 'This action adds a new workshopPersonServiceCancelHistory';
  }

  findAll() {
    return `This action returns all workshopPersonServiceCancelHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workshopPersonServiceCancelHistory`;
  }

  update(id: number, updateWorkshopPersonServiceCancelHistoryDto: UpdateWorkshopPersonServiceCancelHistoryDto) {
    return `This action updates a #${id} workshopPersonServiceCancelHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} workshopPersonServiceCancelHistory`;
  }
}
