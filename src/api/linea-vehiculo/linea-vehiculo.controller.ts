import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LineaVehiculo } from 'src/database/entities/LineaVehiculo';
import { LineaVehiculoService } from './linea-vehiculo.service';

@Controller('linea-vehiculo')
export class LineaVehiculoController {
  constructor(private readonly lineaVehiculoService: LineaVehiculoService) {}

  @Post()
  create(@Body() createLineaVehiculoDto: LineaVehiculo) {
    return this.lineaVehiculoService.create(createLineaVehiculoDto);
  }

  @Get()
  findAll() {
    return this.lineaVehiculoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lineaVehiculoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLineaVehiculoDto: LineaVehiculo,
  ) {
    return this.lineaVehiculoService.update(+id, updateLineaVehiculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lineaVehiculoService.remove(+id);
  }
}
