import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LineaVehiculo } from 'src/database/entities/LineaVehiculo';
import { Repository } from 'typeorm';

@Injectable()
export class LineaVehiculoService {
  constructor(
    @InjectRepository(LineaVehiculo)
    private Repository: Repository<LineaVehiculo>,
  ) {}
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
