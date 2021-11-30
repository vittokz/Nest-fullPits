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

  find(id: number) {
    return this.countryStateRepository.findOne({
      id: id,
    });
  }

  findByCountry(id: number) {
    return this.countryStateRepository.find({
      where: { country: { id: id } },
    });
  }

  update(id: number) {
    return `This action updates a #${id} countryState`;
  }

  remove(id: number) {
    return `This action removes a #${id} countryState`;
  }
}
