import { Module } from '@nestjs/common';
import { WorkshopPersonServiceService } from './workshop-person-service.service';
import { WorkshopPersonServiceController } from './workshop-person-service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkshopPersonService } from 'src/database/entities/WorkshopPersonService';

@Module({
  imports: [TypeOrmModule.forFeature([WorkshopPersonService])],
  controllers: [WorkshopPersonServiceController],
  providers: [WorkshopPersonServiceService],
})
export class WorkshopPersonServiceModule {}
