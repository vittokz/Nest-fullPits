import { Injectable } from '@nestjs/common';
import { TypeService } from 'src/database/entities/TypeService';

@Injectable()
export class TypeServiceService {
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
