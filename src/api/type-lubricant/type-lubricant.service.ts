import { Injectable } from '@nestjs/common';
import { CreateTypeLubricantDto } from './dto/create-type-lubricant.dto';
import { UpdateTypeLubricantDto } from './dto/update-type-lubricant.dto';

@Injectable()
export class TypeLubricantService {
  create(createTypeLubricantDto: CreateTypeLubricantDto) {
    return 'This action adds a new typeLubricant';
  }

  findAll() {
    return `This action returns all typeLubricant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeLubricant`;
  }

  update(id: number, updateTypeLubricantDto: UpdateTypeLubricantDto) {
    return `This action updates a #${id} typeLubricant`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeLubricant`;
  }
}
