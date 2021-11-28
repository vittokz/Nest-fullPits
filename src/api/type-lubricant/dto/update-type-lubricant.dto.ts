import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeLubricantDto } from './create-type-lubricant.dto';

export class UpdateTypeLubricantDto extends PartialType(CreateTypeLubricantDto) {}
