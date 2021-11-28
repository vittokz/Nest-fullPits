import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkshopPersonQualificationDto } from './create-workshop-person-qualification.dto';

export class UpdateWorkshopPersonQualificationDto extends PartialType(CreateWorkshopPersonQualificationDto) {}
