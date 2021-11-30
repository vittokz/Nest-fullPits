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
import { MarcaVehiculo } from 'src/database/entities/MarcaVehiculo';
import { MarcaVehiculoService } from './marca-vehiculo.service';

@Controller('marcas-vehiculos')
export class MarcaVehiculoController {
  constructor(private readonly marcaVehiculoService: MarcaVehiculoService) {}

  @Post()
  create(@Body() createMarcaVehiculoDto: MarcaVehiculo) {
    return this.marcaVehiculoService.create(createMarcaVehiculoDto);
  }

  @Get()
  findAll() {
    return this.marcaVehiculoService.findAll();
  }

  @Get('get-by-id')
  findById(@Query('id') id: number) {
    return this.marcaVehiculoService.findById(id);
  }

  @Get('get-by-type-vehicle')
  getByTypeVehicle(@Query('typeVehicleId') id: number) {
    return this.marcaVehiculoService.findByTypeVehicle(id);
  }
}
