import { Injectable } from '@nestjs/common';
import { TypeVehicle } from 'src/database/entities/TypeVehicle';

@Injectable()
export class TypeVehicleService {
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
