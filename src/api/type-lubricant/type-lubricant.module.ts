import { Module } from '@nestjs/common';
import { TypeLubricantService } from './type-lubricant.service';
import { TypeLubricantController } from './type-lubricant.controller';

@Module({
  controllers: [TypeLubricantController],
  providers: [TypeLubricantService]
})
export class TypeLubricantModule {}
