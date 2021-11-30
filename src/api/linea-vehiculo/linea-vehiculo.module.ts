import { Module } from '@nestjs/common';
import { LineaVehiculoService } from './linea-vehiculo.service';
import { LineaVehiculoController } from './linea-vehiculo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LineaVehiculo } from 'src/database/entities/LineaVehiculo';

@Module({
  imports: [TypeOrmModule.forFeature([LineaVehiculo])],
  controllers: [LineaVehiculoController],
  providers: [LineaVehiculoService],
})
export class LineaVehiculoModule {}
