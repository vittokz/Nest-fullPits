import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/database/entities/City';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City) private cityRepository: Repository<City>,
  ) {}

  create() {
    return 'This action adds a new city';
  }

  findAll() {
    return `This action returns all city`;
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
