import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeVehicle } from 'src/database/entities/TypeVehicle';
import { TypeVehicleService } from './type-vehicle.service';

@Controller('type-vehicle')
export class TypeVehicleController {
  constructor(private readonly typeVehicleService: TypeVehicleService) {}

  @Post()
  create(@Body() createTypeVehicleDto: TypeVehicle) {
    return this.typeVehicleService.create(createTypeVehicleDto);
  }

  @Get()
  findAll() {
    return this.typeVehicleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeVehicleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeVehicleDto: TypeVehicle) {
    return this.typeVehicleService.update(+id, updateTypeVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeVehicleService.remove(+id);
  }
}
