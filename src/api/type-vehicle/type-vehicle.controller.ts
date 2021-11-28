import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeVehicleService } from './type-vehicle.service';
import { CreateTypeVehicleDto } from './dto/create-type-vehicle.dto';
import { UpdateTypeVehicleDto } from './dto/update-type-vehicle.dto';

@Controller('type-vehicle')
export class TypeVehicleController {
  constructor(private readonly typeVehicleService: TypeVehicleService) {}

  @Post()
  create(@Body() createTypeVehicleDto: CreateTypeVehicleDto) {
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
  update(@Param('id') id: string, @Body() updateTypeVehicleDto: UpdateTypeVehicleDto) {
    return this.typeVehicleService.update(+id, updateTypeVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeVehicleService.remove(+id);
  }
}
