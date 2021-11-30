import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/database/entities/Persona';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private Repository: Repository<Person>,
  ) {}
  create(createPersonDto: Person) {
    return 'This action adds a new person';
  }

  findAll() {
    return `This action returns all person`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: Person) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
