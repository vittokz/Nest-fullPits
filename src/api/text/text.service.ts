import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Text } from 'src/database/entities/Text';
import { Repository } from 'typeorm';

@Injectable()
export class TextService {
  constructor(
    @InjectRepository(Text)
    private Repository: Repository<Text>,
  ) {}
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
