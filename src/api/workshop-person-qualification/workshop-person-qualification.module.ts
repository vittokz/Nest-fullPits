import { Module } from '@nestjs/common';
import { WorkshopPersonQualificationService } from './workshop-person-qualification.service';
import { WorkshopPersonQualificationController } from './workshop-person-qualification.controller';

@Module({
  controllers: [WorkshopPersonQualificationController],
  providers: [WorkshopPersonQualificationService]
})
export class WorkshopPersonQualificationModule {}
