import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MarcaVehiculo } from 'src/database/entities/MarcaVehiculo';
import { Repository } from 'typeorm';

@Injectable()
export class MarcaVehiculoService {
  constructor(
    @InjectRepository(MarcaVehiculo)
    private Repository: Repository<MarcaVehiculo>,
  ) {}
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
