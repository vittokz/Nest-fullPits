import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Text } from 'src/database/entities/Text';
import { Repository } from 'typeorm';

@Injectable()
export class TextService {
  constructor(
    @InjectRepository(Text)
    private textRepository: Repository<Text>,
  ) {}
  create(createTextDto: Text) {
    return this.textRepository.save(createTextDto);
  }

  findOne(id: number) {
    return this.textRepository.findOne({ id: id });
  }
}
