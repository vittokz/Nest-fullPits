import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Country } from '../../../database/entities/Country';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country) private countryRepository: Repository<Country>,
  ) {}

  getAll() {
    return this.countryRepository.find();
  }
}
