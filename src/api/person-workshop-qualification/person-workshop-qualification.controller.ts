import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonWorkshopQualificationService } from './person-workshop-qualification.service';
import { CreatePersonWorkshopQualificationDto } from './dto/create-person-workshop-qualification.dto';
import { UpdatePersonWorkshopQualificationDto } from './dto/update-person-workshop-qualification.dto';

@Controller('person-workshop-qualification')
export class PersonWorkshopQualificationController {
  constructor(private readonly personWorkshopQualificationService: PersonWorkshopQualificationService) {}

  @Post()
  create(@Body() createPersonWorkshopQualificationDto: CreatePersonWorkshopQualificationDto) {
    return this.personWorkshopQualificationService.create(createPersonWorkshopQualificationDto);
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
  update(@Param('id') id: string, @Body() updatePersonWorkshopQualificationDto: UpdatePersonWorkshopQualificationDto) {
    return this.personWorkshopQualificationService.update(+id, updatePersonWorkshopQualificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personWorkshopQualificationService.remove(+id);
  }
}
