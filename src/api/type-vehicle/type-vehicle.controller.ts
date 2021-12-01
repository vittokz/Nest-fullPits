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
import { TypeVehicle } from 'src/database/entities/TypeVehicle';
import { TypeVehicleService } from './type-vehicle.service';

@Controller('type-vehicles')
export class TypeVehicleController {
  constructor(private readonly typeVehicleService: TypeVehicleService) {}

  @Get()
  findAll() {
    return this.typeVehicleService.findAll();
  }

  @Get('get-by-workshop-id')
  findByWorkShopId(@Query('workshopId') workshopId: number) {
    return this.typeVehicleService.findByWorkShopId(workshopId);
  }
}
