import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CountryState } from 'src/database/entities/CountryState';
import { CountryStateService } from './country-state.service';

@Controller('countryState')
export class CountryStateController {
  constructor(private readonly countryStateService: CountryStateService) {}

  @Post()
  create(@Body() createCountryStateDto: CountryState) {
    return this.countryStateService.create(createCountryStateDto);
  }

  @Get()
  findAll(@Query('id') id: number) {
    return this.countryStateService.find(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryStateService.findByCountry(+id);
  }
}
