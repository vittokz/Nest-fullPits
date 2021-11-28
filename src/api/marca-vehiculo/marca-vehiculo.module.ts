import { Module } from '@nestjs/common';
import { MarcaVehiculoService } from './marca-vehiculo.service';
import { MarcaVehiculoController } from './marca-vehiculo.controller';

@Module({
  controllers: [MarcaVehiculoController],
  providers: [MarcaVehiculoService]
})
export class MarcaVehiculoModule {}
