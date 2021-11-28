import { PartialType } from '@nestjs/mapped-types';
import { CreateMarcaVehiculoDto } from './create-marca-vehiculo.dto';

export class UpdateMarcaVehiculoDto extends PartialType(CreateMarcaVehiculoDto) {}
