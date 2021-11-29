import { Injectable } from '@nestjs/common';
import { CountryState } from 'src/database/entities/CountryState';

@Injectable()
export class CountryStateService {
  create(createCountryStateDto: CountryState) {
    return 'This action adds a new countryState';
  }

  findAll() {
    return `This action returns all countryState`;
  }

  findOne(id: number) {
    return `This action returns a #${id} countryState`;
  }

  update(id: number) {
    return `This action updates a #${id} countryState`;
  }

  remove(id: number) {
    return `This action removes a #${id} countryState`;
  }
}
