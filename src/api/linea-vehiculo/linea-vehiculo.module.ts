import { Module } from '@nestjs/common';
import { LineaVehiculoService } from './linea-vehiculo.service';
import { LineaVehiculoController } from './linea-vehiculo.controller';

@Module({
  controllers: [LineaVehiculoController],
  providers: [LineaVehiculoService]
})
export class LineaVehiculoModule {}
