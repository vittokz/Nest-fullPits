import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehiculo } from 'src/database/entities/Vehiculo';
import { Repository } from 'typeorm';

@Injectable()
export class VehiculoService {
  constructor(
    @InjectRepository(Vehiculo)
    private Repository: Repository<Vehiculo>,
  ) {}
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
