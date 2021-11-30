import { Controller, Get, Post, Query } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  create() {
    //return this.cityService.create(createCityDto);
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
