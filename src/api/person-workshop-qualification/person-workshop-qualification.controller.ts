import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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

  @Get()
  findAll() {
    return this.personWorkshopQualificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personWorkshopQualificationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updatePersonWorkshopQualificationDto: PersonWorkshopQualification,
  ) {
    return this.personWorkshopQualificationService.update(
      +id,
      updatePersonWorkshopQualificationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personWorkshopQualificationService.remove(+id);
  }
}
