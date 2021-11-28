import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineaVehiculoService } from './linea-vehiculo.service';
import { CreateLineaVehiculoDto } from './dto/create-linea-vehiculo.dto';
import { UpdateLineaVehiculoDto } from './dto/update-linea-vehiculo.dto';

@Controller('linea-vehiculo')
export class LineaVehiculoController {
  constructor(private readonly lineaVehiculoService: LineaVehiculoService) {}

  @Post()
  create(@Body() createLineaVehiculoDto: CreateLineaVehiculoDto) {
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
  update(@Param('id') id: string, @Body() updateLineaVehiculoDto: UpdateLineaVehiculoDto) {
    return this.lineaVehiculoService.update(+id, updateLineaVehiculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lineaVehiculoService.remove(+id);
  }
}
