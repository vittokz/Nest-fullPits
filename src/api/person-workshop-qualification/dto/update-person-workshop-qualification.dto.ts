import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonWorkshopQualificationDto } from './create-person-workshop-qualification.dto';

export class UpdatePersonWorkshopQualificationDto extends PartialType(CreatePersonWorkshopQualificationDto) {}
