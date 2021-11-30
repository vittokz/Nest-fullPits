import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LineaVehiculo } from 'src/database/entities/LineaVehiculo';
import { Repository } from 'typeorm';

@Injectable()
export class LineaVehiculoService {
  constructor(
    @InjectRepository(LineaVehiculo)
    private lineaVehiculoRepository: Repository<LineaVehiculo>,
  ) {}
  create(createLineaVehiculoDto: LineaVehiculo) {
    return this.lineaVehiculoRepository.save(createLineaVehiculoDto);
  }

  findByMarcaId(id: number) {
    return this.lineaVehiculoRepository.find({
      where: { marca: { id: id } },
    });
  }

  findOne(id: number) {
    return this.lineaVehiculoRepository.findOne({
      id: id,
    });
  }
}
