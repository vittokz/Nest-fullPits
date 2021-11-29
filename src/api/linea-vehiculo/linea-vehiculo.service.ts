import { Injectable } from '@nestjs/common';
import { LineaVehiculo } from 'src/database/entities/LineaVehiculo';

@Injectable()
export class LineaVehiculoService {
  create(createLineaVehiculoDto: LineaVehiculo) {
    return 'This action adds a new lineaVehiculo';
  }

  findAll() {
    return `This action returns all lineaVehiculo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lineaVehiculo`;
  }

  update(id: number, updateLineaVehiculoDto: LineaVehiculo) {
    return `This action updates a #${id} lineaVehiculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} lineaVehiculo`;
  }
}
