import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkshopPersonQualification } from 'src/database/entities/WorkshopPersonQualification';
import { WorkshopPersonQualificationService } from './workshop-person-qualification.service';

@Controller('workshop-person-qualification')
export class WorkshopPersonQualificationController {
  constructor(
    private readonly workshopPersonQualificationService: WorkshopPersonQualificationService,
  ) {}

  @Post()
  create(
    @Body()
    createWorkshopPersonQualificationDto: WorkshopPersonQualification,
  ) {
    return this.workshopPersonQualificationService.create(
      createWorkshopPersonQualificationDto,
    );
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
  update(
    @Param('id') id: string,
    @Body()
    updateWorkshopPersonQualificationDto: WorkshopPersonQualification,
  ) {
    return this.workshopPersonQualificationService.update(
      +id,
      updateWorkshopPersonQualificationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workshopPersonQualificationService.remove(+id);
  }
}
