import { PartialType } from '@nestjs/mapped-types';
import { CreateCountryStateDto } from './create-country-state.dto';

export class UpdateCountryStateDto extends PartialType(CreateCountryStateDto) {}
