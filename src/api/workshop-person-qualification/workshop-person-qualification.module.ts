import { Module } from '@nestjs/common';
import { WorkshopPersonQualificationService } from './workshop-person-qualification.service';
import { WorkshopPersonQualificationController } from './workshop-person-qualification.controller';
import { WorkshopPersonQualification } from 'src/database/entities/WorkshopPersonQualification';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WorkshopPersonQualification])],
  controllers: [WorkshopPersonQualificationController],
  providers: [WorkshopPersonQualificationService],
})
export class WorkshopPersonQualificationModule {}
