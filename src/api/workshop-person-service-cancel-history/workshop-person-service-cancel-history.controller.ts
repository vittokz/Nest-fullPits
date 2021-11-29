import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkshopPersonServiceCancelHistory } from 'src/database/entities/WorkshopPersonServiceCancelHistory';
import { WorkshopPersonServiceCancelHistoryService } from './workshop-person-service-cancel-history.service';

@Controller('workshop-person-service-cancel-history')
export class WorkshopPersonServiceCancelHistoryController {
  constructor(
    private readonly workshopPersonServiceCancelHistoryService: WorkshopPersonServiceCancelHistoryService,
  ) {}

  @Post()
  create(
    @Body()
    createWorkshopPersonServiceCancelHistoryDto: WorkshopPersonServiceCancelHistory,
  ) {
    return this.workshopPersonServiceCancelHistoryService.create(
      createWorkshopPersonServiceCancelHistoryDto,
    );
  }

  @Get()
  findAll() {
    return this.workshopPersonServiceCancelHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workshopPersonServiceCancelHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateWorkshopPersonServiceCancelHistoryDto: WorkshopPersonServiceCancelHistory,
  ) {
    return this.workshopPersonServiceCancelHistoryService.update(
      +id,
      updateWorkshopPersonServiceCancelHistoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workshopPersonServiceCancelHistoryService.remove(+id);
  }
}
