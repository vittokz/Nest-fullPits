import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { Workshop } from 'src/database/entities/Workshop';
import { WorkshopNearUseRequest } from 'src/dto/workshop-near-user-request';
import { WorkshopService } from './workshop.service';

@Controller('workshop')
export class WorkshopController {
  constructor(private readonly workshopService: WorkshopService) {}

  @Post()
  create(@Body() createWorkshopDto: Workshop) {
    return this.workshopService.create(createWorkshopDto);
  }

  @Get()
  findById(@Query('id') id: number) {
    return this.workshopService.findById(id);
  }

  @Get('get-by-user-id')
  findByUserId(@Query('userId') userId: number) {
    return this.workshopService.findByUserId(userId);
  }

  @Get('get-paginated')
  findAllPaginated(
    @Query('limit') limit: number,
    @Query('start') start: number,
  ) {
    return this.workshopService.findAllPaginated(limit, start);
  }

  @Post('get-near-user')
  getNerUser(@Body() createWorkshopDto: WorkshopNearUseRequest) {
    return this.workshopService.findNearByUser(createWorkshopDto);
  }

  @Put('update-type-service')
  updateTypeServices(@Body() updateWorkshopDto: Workshop) {
    return this.workshopService.updateTypeServices(updateWorkshopDto);
  }

  @Put('update-online-status')
  updateOnlineStatus(@Body() updateWorkshopDto: Workshop) {
    return this.workshopService.updateOnlineStatus(updateWorkshopDto);
  }

  @Put('update-type-vehicle')
  updateTypeVehicles(@Body() updateWorkshopDto: Workshop) {
    return this.workshopService.updateTypeVehicles(updateWorkshopDto);
  }

  @Put('update-messaging-token')
  updateMessagingToken(@Body() updateWorkshopDto: Workshop) {
    return this.workshopService.updateMessagingToken(updateWorkshopDto);
  }
}
