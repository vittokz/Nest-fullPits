import { Injectable } from '@nestjs/common';
import { MarcaVehiculo } from 'src/database/entities/MarcaVehiculo';

@Injectable()
export class MarcaVehiculoService {
  create(createMarcaVehiculoDto: MarcaVehiculo) {
    return 'This action adds a new marcaVehiculo';
  }

  findAll() {
    return `This action returns all marcaVehiculo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} marcaVehiculo`;
  }

  update(id: number, updateMarcaVehiculoDto: MarcaVehiculo) {
    return `This action updates a #${id} marcaVehiculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} marcaVehiculo`;
  }
}
