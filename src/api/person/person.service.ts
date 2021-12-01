import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/database/entities/Persona';
import { ETypePerson } from 'src/enums/ETypePerson';
import { Like, Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
  ) {}
  create(createPersonDto: Person) {
    return this.personRepository.save(createPersonDto);
  }

  update(createPersonDto: Person) {
    this.findById(createPersonDto.id).then((person) => {
      person.nombres = createPersonDto.nombres;
      person.apellidos = createPersonDto.apellidos;
      person.identificacion = createPersonDto.identificacion;
      person.genero = createPersonDto.genero;
      person.phoneNumber = createPersonDto.phoneNumber;
      person.fechaNacimiento = createPersonDto.fechaNacimiento;

      this.personRepository.save(person);
    });
  }

  findById(id: number) {
    return this.personRepository.findOne(id);
  }

  findByUserId(id: number) {
    return this.personRepository.find({
      where: { userId: id },
    });
  }

  findAllPaginated(limit: number, start: number) {
    return this.personRepository.find({
      where: { type: ETypePerson.PERSONA_REGULAR },
      take: limit,
      skip: start,
    });
  }

  findByPhoneNumberLike(phoneNumber: string) {
    return this.personRepository.find({
      where: { phoneNumber: Like('%' + phoneNumber + '%') },
    });
  }

  findByNameLike(name: string) {
    return this.personRepository.find({
      where: { nombres: Like('%' + name + '%') },
      take: 10,
    });
  }
}
