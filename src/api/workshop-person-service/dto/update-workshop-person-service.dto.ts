import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkshopPersonServiceDto } from './create-workshop-person-service.dto';

export class UpdateWorkshopPersonServiceDto extends PartialType(CreateWorkshopPersonServiceDto) {}
