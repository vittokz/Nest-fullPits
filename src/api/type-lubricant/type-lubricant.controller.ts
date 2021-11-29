import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeLubricant } from 'src/database/entities/TypeLubricant';
import { TypeLubricantService } from './type-lubricant.service';

@Controller('type-lubricant')
export class TypeLubricantController {
  constructor(private readonly typeLubricantService: TypeLubricantService) {}

  @Post()
  create(@Body() createTypeLubricantDto: TypeLubricant) {
    return this.typeLubricantService.create(createTypeLubricantDto);
  }

  @Get()
  findAll() {
    return this.typeLubricantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeLubricantService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeLubricantDto: TypeLubricant,
  ) {
    return this.typeLubricantService.update(+id, updateTypeLubricantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeLubricantService.remove(+id);
  }
}
