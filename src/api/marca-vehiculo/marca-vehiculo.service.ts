import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MarcaVehiculo } from 'src/database/entities/MarcaVehiculo';
import { Repository } from 'typeorm';

@Injectable()
export class MarcaVehiculoService {
  constructor(
    @InjectRepository(MarcaVehiculo)
    private marcaVehiculoRepository: Repository<MarcaVehiculo>,
  ) {}
  create(createMarcaVehiculoDto: MarcaVehiculo) {
    return this.marcaVehiculoRepository.save(createMarcaVehiculoDto);
  }

  findAll() {
    return this.marcaVehiculoRepository.find();
  }

  findById(id: number) {
    return this.marcaVehiculoRepository.findOne({
      id: id,
    });
  }

  findByTypeVehicle(typeVehicleId: number) {
    return this.marcaVehiculoRepository.find({
      where: { typeVehicleId: typeVehicleId },
    });
  }
}
