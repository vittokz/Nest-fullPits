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
    return 'This action adds a new typeService';
  }

  findAll() {
    return `This action returns all typeService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeService`;
  }

  update(id: number, updateTypeServiceDto: TypeService) {
    return `This action updates a #${id} typeService`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeService`;
  }
}
