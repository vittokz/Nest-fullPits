import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkshopPersonQualificationService } from './workshop-person-qualification.service';
import { CreateWorkshopPersonQualificationDto } from './dto/create-workshop-person-qualification.dto';
import { UpdateWorkshopPersonQualificationDto } from './dto/update-workshop-person-qualification.dto';

@Controller('workshop-person-qualification')
export class WorkshopPersonQualificationController {
  constructor(private readonly workshopPersonQualificationService: WorkshopPersonQualificationService) {}

  @Post()
  create(@Body() createWorkshopPersonQualificationDto: CreateWorkshopPersonQualificationDto) {
    return this.workshopPersonQualificationService.create(createWorkshopPersonQualificationDto);
  }

  @Get()
  findAll() {
    return this.workshopPersonQualificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workshopPersonQualificationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkshopPersonQualificationDto: UpdateWorkshopPersonQualificationDto) {
    return this.workshopPersonQualificationService.update(+id, updateWorkshopPersonQualificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workshopPersonQualificationService.remove(+id);
  }
}
