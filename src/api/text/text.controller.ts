import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { Text } from 'src/database/entities/Text';
import { TextService } from './text.service';

@Controller('texts')
export class TextController {
  constructor(private readonly textService: TextService) {}

  @Post()
  create(@Body() createTextDto: Text) {
    return this.textService.create(createTextDto);
  }

  @Get()
  findOne(@Query('id') id: number) {
    return this.textService.findOne(id);
  }
}
