import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PersonWorkshopQualification } from 'src/database/entities/PersonWorkshopQualification';
import { PersonWorkshopQualificationService } from './person-workshop-qualification.service';

@Controller('person-workshop-qualification')
export class PersonWorkshopQualificationController {
  constructor(
    private readonly personWorkshopQualificationService: PersonWorkshopQualificationService,
  ) {}

  @Post()
  create(
    @Body()
    createPersonWorkshopQualificationDto: PersonWorkshopQualification,
  ) {
    return this.personWorkshopQualificationService.create(
      createPersonWorkshopQualificationDto,
    );
  }

  @Get('get-by-worshop-person-service')
  findByWorkshopPersonServiceId(
    @Query('workshopPersonServiceId') workshopPersonServiceId: number,
  ) {
    return this.personWorkshopQualificationService.findByWorkshopPersonServiceId(
      workshopPersonServiceId,
    );
  }
}
