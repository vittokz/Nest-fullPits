import { PartialType } from '@nestjs/mapped-types';
import { CreateLineaVehiculoDto } from './create-linea-vehiculo.dto';

export class UpdateLineaVehiculoDto extends PartialType(CreateLineaVehiculoDto) {}
