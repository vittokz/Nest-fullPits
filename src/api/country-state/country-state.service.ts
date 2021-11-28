import { Injectable } from '@nestjs/common';
import { CreateCountryStateDto } from './dto/create-country-state.dto';
import { UpdateCountryStateDto } from './dto/update-country-state.dto';

@Injectable()
export class CountryStateService {
  create(createCountryStateDto: CreateCountryStateDto) {
    return 'This action adds a new countryState';
  }

  findAll() {
    return `This action returns all countryState`;
  }

  findOne(id: number) {
    return `This action returns a #${id} countryState`;
  }

  update(id: number, updateCountryStateDto: UpdateCountryStateDto) {
    return `This action updates a #${id} countryState`;
  }

  remove(id: number) {
    return `This action removes a #${id} countryState`;
  }
}
