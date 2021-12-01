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
import { WorkshopTypeService } from 'src/database/entities/WorkshopTypeService';
import { WorkshopTypeServicesService } from './workshop-type-services.service';

@Controller('workshopTypeServices')
export class WorkshopTypeServicesController {
  constructor(
    private readonly workshopTypeServicesService: WorkshopTypeServicesService,
  ) {}

  @Post()
  create(@Body() createWorkshopTypeServiceDto: WorkshopTypeService) {
    return this.workshopTypeServicesService.save(createWorkshopTypeServiceDto);
  }

  @Post('save-all')
  saveAll(@Body() workshopTypeServiceList: WorkshopTypeService[]) {
    return this.workshopTypeServicesService.saveAll(workshopTypeServiceList);
  }

  @Post('delete-all-by-id-in')
  deleteAllByIdIn(@Body() workshopTypeServiceList: WorkshopTypeService[]) {
    return this.workshopTypeServicesService.deleteAllByIdIn(
      workshopTypeServiceList,
    );
  }

  @Get('getByWorkshopId')
  findByWorshopId(@Query('workshopId') workshopId: number) {
    return this.workshopTypeServicesService.findByWorshopId(workshopId);
  }

  @Delete()
  remove(@Query('id') id: number) {
    return this.workshopTypeServicesService.delete(id);
  }
}
