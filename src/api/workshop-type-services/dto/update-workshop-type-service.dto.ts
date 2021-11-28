import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkshopTypeServiceDto } from './create-workshop-type-service.dto';

export class UpdateWorkshopTypeServiceDto extends PartialType(CreateWorkshopTypeServiceDto) {}
