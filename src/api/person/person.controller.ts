import { Controller, Get, Post, Body, Query, Put } from '@nestjs/common';
import { Person } from 'src/database/entities/Persona';
import { PersonService } from './person.service';

@Controller('persona')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: Person) {
    return this.personService.create(createPersonDto);
  }

  @Get('getByUserId')
  findByUserId(@Query('id') id: number) {
    return this.personService.findByUserId(id);
  }

  @Get('get-by-id')
  findById(@Query('id') id: number) {
    return this.personService.findById(id);
  }

  @Get('get-by-phone-number')
  findByPhoneNumberLike(@Query('phoneNumber') phoneNumber: string) {
    return this.personService.findByPhoneNumberLike(phoneNumber);
  }

  @Get('get-paginated')
  findAllPaginated(
    @Query('limit') limit: number,
    @Query('start') start: number,
  ) {
    return this.personService.findAllPaginated(limit, start);
  }

  @Get('get-by-name-like')
  findByNameLike(@Query('name') name: string) {
    return this.personService.findByNameLike(name);
  }

  @Put()
  update(@Body() updatePersonDto: Person) {
    return this.personService.update(updatePersonDto);
  }
}
