import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkshopPersonServiceCancelHistoryDto } from './create-workshop-person-service-cancel-history.dto';

export class UpdateWorkshopPersonServiceCancelHistoryDto extends PartialType(CreateWorkshopPersonServiceCancelHistoryDto) {}
