import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkshopPersonServiceService } from './workshop-person-service.service';
import { CreateWorkshopPersonServiceDto } from './dto/create-workshop-person-service.dto';
import { UpdateWorkshopPersonServiceDto } from './dto/update-workshop-person-service.dto';

@Controller('workshop-person-service')
export class WorkshopPersonServiceController {
  constructor(private readonly workshopPersonServiceService: WorkshopPersonServiceService) {}

  @Post()
  create(@Body() createWorkshopPersonServiceDto: CreateWorkshopPersonServiceDto) {
    return this.workshopPersonServiceService.create(createWorkshopPersonServiceDto);
  }

  @Get()
  findAll() {
    return this.workshopPersonServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workshopPersonServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkshopPersonServiceDto: UpdateWorkshopPersonServiceDto) {
    return this.workshopPersonServiceService.update(+id, updateWorkshopPersonServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workshopPersonServiceService.remove(+id);
  }
}
