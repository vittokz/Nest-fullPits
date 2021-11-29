import { Injectable } from '@nestjs/common';
import { Vehiculo } from 'src/database/entities/Vehiculo';

@Injectable()
export class VehiculoService {
  create(createVehiculoDto: Vehiculo) {
    return 'This action adds a new vehiculo';
  }

  findAll() {
    return `This action returns all vehiculo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehiculo`;
  }

  update(id: number, updateVehiculoDto: Vehiculo) {
    return `This action updates a #${id} vehiculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehiculo`;
  }
}
