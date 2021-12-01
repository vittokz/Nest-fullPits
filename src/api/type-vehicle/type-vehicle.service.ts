import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeVehicle } from 'src/database/entities/TypeVehicle';
import { Workshop } from 'src/database/entities/Workshop';
import { Repository } from 'typeorm';

@Injectable()
export class TypeVehicleService {
  constructor(
    @InjectRepository(TypeVehicle)
    private typeVehicleRepository: Repository<TypeVehicle>,
    @InjectRepository(Workshop)
    private workshopRepository: Repository<Workshop>,
  ) {}

  findAll() {
    return this.typeVehicleRepository.find();
  }

  findByWorkShopId(workshopId: number) {
    this.workshopRepository
      .findOne({
        where: { id: workshopId },
        relations: ['typeVehicleList'],
      })
      .then((workshop) => {
        return workshop.typeVehicleList;
      });
  }
}
