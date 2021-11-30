import { Module } from '@nestjs/common';
import { TypeLubricantService } from './type-lubricant.service';
import { TypeLubricantController } from './type-lubricant.controller';
import { TypeLubricant } from 'src/database/entities/TypeLubricant';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TypeLubricant])],
  controllers: [TypeLubricantController],
  providers: [TypeLubricantService],
})
export class TypeLubricantModule {}
