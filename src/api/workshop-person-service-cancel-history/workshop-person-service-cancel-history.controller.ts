import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkshopPersonServiceCancelHistoryService } from './workshop-person-service-cancel-history.service';
import { CreateWorkshopPersonServiceCancelHistoryDto } from './dto/create-workshop-person-service-cancel-history.dto';
import { UpdateWorkshopPersonServiceCancelHistoryDto } from './dto/update-workshop-person-service-cancel-history.dto';

@Controller('workshop-person-service-cancel-history')
export class WorkshopPersonServiceCancelHistoryController {
  constructor(private readonly workshopPersonServiceCancelHistoryService: WorkshopPersonServiceCancelHistoryService) {}

  @Post()
  create(@Body() createWorkshopPersonServiceCancelHistoryDto: CreateWorkshopPersonServiceCancelHistoryDto) {
    return this.workshopPersonServiceCancelHistoryService.create(createWorkshopPersonServiceCancelHistoryDto);
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
  update(@Param('id') id: string, @Body() updateWorkshopPersonServiceCancelHistoryDto: UpdateWorkshopPersonServiceCancelHistoryDto) {
    return this.workshopPersonServiceCancelHistoryService.update(+id, updateWorkshopPersonServiceCancelHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workshopPersonServiceCancelHistoryService.remove(+id);
  }
}
