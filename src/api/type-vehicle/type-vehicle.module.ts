import { Module } from '@nestjs/common';
import { TypeVehicleService } from './type-vehicle.service';
import { TypeVehicleController } from './type-vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeVehicle } from 'src/database/entities/TypeVehicle';
import { Workshop } from 'src/database/entities/Workshop';

@Module({
  imports: [TypeOrmModule.forFeature([TypeVehicle, Workshop])],
  controllers: [TypeVehicleController],
  providers: [TypeVehicleService],
})
export class TypeVehicleModule {}
