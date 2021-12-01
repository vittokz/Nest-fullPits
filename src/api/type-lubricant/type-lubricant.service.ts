import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeLubricant } from 'src/database/entities/TypeLubricant';
import { Repository } from 'typeorm';

@Injectable()
export class TypeLubricantService {
  constructor(
    @InjectRepository(TypeLubricant)
    private typeLubricantRepository: Repository<TypeLubricant>,
  ) {}

  findAll() {
    return this.typeLubricantRepository.find();
  }
}
