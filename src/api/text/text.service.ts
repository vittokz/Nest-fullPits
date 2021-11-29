import { Injectable } from '@nestjs/common';
import { Text } from 'src/database/entities/Text';

@Injectable()
export class TextService {
  create(createTextDto: Text) {
    return 'This action adds a new text';
  }

  findAll() {
    return `This action returns all text`;
  }

  findOne(id: number) {
    return `This action returns a #${id} text`;
  }

  update(id: number, updateTextDto: Text) {
    return `This action updates a #${id} text`;
  }

  remove(id: number) {
    return `This action removes a #${id} text`;
  }
}
