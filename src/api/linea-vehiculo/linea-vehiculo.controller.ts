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
import { LineaVehiculo } from 'src/database/entities/LineaVehiculo';
import { LineaVehiculoService } from './linea-vehiculo.service';

@Controller('lineas-vehiculos')
export class LineaVehiculoController {
  constructor(private readonly lineaVehiculoService: LineaVehiculoService) {}

  @Post()
  create(@Body() createLineaVehiculoDto: LineaVehiculo) {
    return this.lineaVehiculoService.create(createLineaVehiculoDto);
  }

  @Get('get-by-marca-id')
  findByMarcaId(@Query('id') id: number) {
    return this.lineaVehiculoService.findByMarcaId(id);
  }

  @Get('get-by-id')
  findOne(@Query('id') id: number) {
    return this.lineaVehiculoService.findOne(id);
  }
}
