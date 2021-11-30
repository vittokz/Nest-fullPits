import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryState } from 'src/database/entities/CountryState';
import { Repository } from 'typeorm';

@Injectable()
export class CountryStateService {
  constructor(
    @InjectRepository(CountryState)
    private countryStateRepository: Repository<CountryState>,
  ) {}
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
