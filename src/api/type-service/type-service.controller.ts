import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeService } from 'src/database/entities/TypeService';
import { TypeServiceService } from './type-service.service';

@Controller('type-service')
export class TypeServiceController {
  constructor(private readonly typeServiceService: TypeServiceService) {}

  @Post()
  create(@Body() createTypeServiceDto: TypeService) {
    return this.typeServiceService.create(createTypeServiceDto);
  }

  @Get()
  findAll() {
    return this.typeServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeServiceDto: TypeService) {
    return this.typeServiceService.update(+id, updateTypeServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeServiceService.remove(+id);
  }
}
