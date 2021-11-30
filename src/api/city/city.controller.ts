import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { City } from 'src/database/entities/City';
import { CityService } from './city.service';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  create(@Body() createCityDto: City) {
    return this.cityService.create(createCityDto);
  }

  @Get('getByCountryState')
  getByCountryState(@Query('id') id: number) {
    return this.cityService.findByCountryState(id);
  }

  @Get()
  findOne(@Query('id') id: number) {
    return this.cityService.findOne(+id);
  }
}
