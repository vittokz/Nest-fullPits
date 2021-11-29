import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MarcaVehiculo } from 'src/database/entities/MarcaVehiculo';
import { MarcaVehiculoService } from './marca-vehiculo.service';

@Controller('marca-vehiculo')
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marcaVehiculoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMarcaVehiculoDto: MarcaVehiculo,
  ) {
    return this.marcaVehiculoService.update(+id, updateMarcaVehiculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marcaVehiculoService.remove(+id);
  }
}
