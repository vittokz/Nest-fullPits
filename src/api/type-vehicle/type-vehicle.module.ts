import { Module } from '@nestjs/common';
import { TypeVehicleService } from './type-vehicle.service';
import { TypeVehicleController } from './type-vehicle.controller';

@Module({
  controllers: [TypeVehicleController],
  providers: [TypeVehicleService]
})
export class TypeVehicleModule {}
