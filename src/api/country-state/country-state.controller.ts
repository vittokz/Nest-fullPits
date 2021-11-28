import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountryStateService } from './country-state.service';
import { CreateCountryStateDto } from './dto/create-country-state.dto';
import { UpdateCountryStateDto } from './dto/update-country-state.dto';

@Controller('country-state')
export class CountryStateController {
  constructor(private readonly countryStateService: CountryStateService) {}

  @Post()
  create(@Body() createCountryStateDto: CreateCountryStateDto) {
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
  update(@Param('id') id: string, @Body() updateCountryStateDto: UpdateCountryStateDto) {
    return this.countryStateService.update(+id, updateCountryStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryStateService.remove(+id);
  }
}
