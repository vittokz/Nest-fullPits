import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkshopTypeServicesService } from './workshop-type-services.service';
import { CreateWorkshopTypeServiceDto } from './dto/create-workshop-type-service.dto';
import { UpdateWorkshopTypeServiceDto } from './dto/update-workshop-type-service.dto';

@Controller('workshop-type-services')
export class WorkshopTypeServicesController {
  constructor(private readonly workshopTypeServicesService: WorkshopTypeServicesService) {}

  @Post()
  create(@Body() createWorkshopTypeServiceDto: CreateWorkshopTypeServiceDto) {
    return this.workshopTypeServicesService.create(createWorkshopTypeServiceDto);
  }

  @Get()
  findAll() {
    return this.workshopTypeServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workshopTypeServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkshopTypeServiceDto: UpdateWorkshopTypeServiceDto) {
    return this.workshopTypeServicesService.update(+id, updateWorkshopTypeServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workshopTypeServicesService.remove(+id);
  }
}
