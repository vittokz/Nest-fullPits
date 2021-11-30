import { Module } from '@nestjs/common';
import { TypeServiceService } from './type-service.service';
import { TypeServiceController } from './type-service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeService } from 'src/database/entities/TypeService';

@Module({
  imports: [TypeOrmModule.forFeature([TypeService])],
  controllers: [TypeServiceController],
  providers: [TypeServiceService],
})
export class TypeServiceModule {}
