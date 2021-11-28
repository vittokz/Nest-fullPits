import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarcaVehiculoService } from './marca-vehiculo.service';
import { CreateMarcaVehiculoDto } from './dto/create-marca-vehiculo.dto';
import { UpdateMarcaVehiculoDto } from './dto/update-marca-vehiculo.dto';

@Controller('marca-vehiculo')
export class MarcaVehiculoController {
  constructor(private readonly marcaVehiculoService: MarcaVehiculoService) {}

  @Post()
  create(@Body() createMarcaVehiculoDto: CreateMarcaVehiculoDto) {
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
  update(@Param('id') id: string, @Body() updateMarcaVehiculoDto: UpdateMarcaVehiculoDto) {
    return this.marcaVehiculoService.update(+id, updateMarcaVehiculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marcaVehiculoService.remove(+id);
  }
}
