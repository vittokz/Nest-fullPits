import { Injectable } from '@nestjs/common';
import { TypeLubricant } from 'src/database/entities/TypeLubricant';

@Injectable()
export class TypeLubricantService {
  create(createTypeLubricantDto: TypeLubricant) {
    return 'This action adds a new typeLubricant';
  }

  findAll() {
    return `This action returns all typeLubricant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeLubricant`;
  }

  update(id: number, updateTypeLubricantDto: TypeLubricant) {
    return `This action updates a #${id} typeLubricant`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeLubricant`;
  }
}
