import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeService } from 'src/database/entities/TypeService';
import { Repository } from 'typeorm';

@Injectable()
export class TypeServiceService {
  constructor(
    @InjectRepository(TypeService)
    private typeServiceRepository: Repository<TypeService>,
  ) {}
  create(createTypeServiceDto: TypeService) {
    return this.typeServiceRepository.save(createTypeServiceDto);
  }

  findAll() {
    return this.typeServiceRepository.find();
  }

  findAvailable() {
    return this.typeServiceRepository
      .createQueryBuilder('type_services')
      .distinctOn(['type_services.id'])
      .innerJoin('type_services.workshopTypeServices', 'alias')
      .getMany();
  }
}
