import { Injectable } from '@nestjs/common';
import { CreateLineaVehiculoDto } from './dto/create-linea-vehiculo.dto';
import { UpdateLineaVehiculoDto } from './dto/update-linea-vehiculo.dto';

@Injectable()
export class LineaVehiculoService {
  create(createLineaVehiculoDto: CreateLineaVehiculoDto) {
    return 'This action adds a new lineaVehiculo';
  }

  findAll() {
    return `This action returns all lineaVehiculo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lineaVehiculo`;
  }

  update(id: number, updateLineaVehiculoDto: UpdateLineaVehiculoDto) {
    return `This action updates a #${id} lineaVehiculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} lineaVehiculo`;
  }
}
