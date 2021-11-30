import { Module } from '@nestjs/common';
import { MarcaVehiculoService } from './marca-vehiculo.service';
import { MarcaVehiculoController } from './marca-vehiculo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcaVehiculo } from 'src/database/entities/MarcaVehiculo';

@Module({
  imports: [TypeOrmModule.forFeature([MarcaVehiculo])],
  controllers: [MarcaVehiculoController],
  providers: [MarcaVehiculoService],
})
export class MarcaVehiculoModule {}
