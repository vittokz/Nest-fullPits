import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CountryState } from 'src/database/entities/CountryState';
import { CountryStateService } from './country-state.service';

@Controller('country-state')
export class CountryStateController {
  constructor(private readonly countryStateService: CountryStateService) {}

  @Post()
  create(@Body() createCountryStateDto: CountryState) {
    return this.countryStateService.create(createCountryStateDto);
  }

  @Get()
  findAll() {
    return this.countryStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryStateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.countryStateService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryStateService.remove(+id);
  }
}
