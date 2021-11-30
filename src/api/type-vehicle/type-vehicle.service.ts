import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeVehicle } from 'src/database/entities/TypeVehicle';
import { Repository } from 'typeorm';

@Injectable()
export class TypeVehicleService {
  constructor(
    @InjectRepository(TypeVehicle)
    private Repository: Repository<TypeVehicle>,
  ) {}
  create(createTypeVehicleDto: TypeVehicle) {
    return 'This action adds a new typeVehicle';
  }

  findAll() {
    return `This action returns all typeVehicle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeVehicle`;
  }

  update(id: number, updateTypeVehicleDto: TypeVehicle) {
    return `This action updates a #${id} typeVehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeVehicle`;
  }
}
