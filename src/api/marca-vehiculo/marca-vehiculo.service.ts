import { Injectable } from '@nestjs/common';
import { CreateMarcaVehiculoDto } from './dto/create-marca-vehiculo.dto';
import { UpdateMarcaVehiculoDto } from './dto/update-marca-vehiculo.dto';

@Injectable()
export class MarcaVehiculoService {
  create(createMarcaVehiculoDto: CreateMarcaVehiculoDto) {
    return 'This action adds a new marcaVehiculo';
  }

  findAll() {
    return `This action returns all marcaVehiculo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} marcaVehiculo`;
  }

  update(id: number, updateMarcaVehiculoDto: UpdateMarcaVehiculoDto) {
    return `This action updates a #${id} marcaVehiculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} marcaVehiculo`;
  }
}
