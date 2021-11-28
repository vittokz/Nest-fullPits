import { Controller, Get } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get('get-all')
  getAll() {
    console.log(new Date().toISOString());

    return this.countryService.getAll();
  }
}
