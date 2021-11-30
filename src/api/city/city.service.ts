import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/database/entities/City';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City) private cityRepository: Repository<City>,
  ) {}

  create(city: City) {
    return this.cityRepository.save(city);
  }

  findByCountryState(idCountryState: number) {
    return this.cityRepository.find({
      where: { countryState: { id: idCountryState } },
    });
  }

  findOne(id: number) {
    let cities = this.cityRepository.findOne({
      id: id,
    });
    return cities;
  }

  update(id: number) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
