import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeLubricant } from 'src/database/entities/TypeLubricant';
import { TypeLubricantService } from './type-lubricant.service';

@Controller('type-lubricant')
export class TypeLubricantController {
  constructor(private readonly typeLubricantService: TypeLubricantService) {}

  @Get()
  findAll() {
    return this.typeLubricantService.findAll();
  }
}
