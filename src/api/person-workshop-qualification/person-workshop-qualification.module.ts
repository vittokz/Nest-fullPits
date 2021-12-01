import { Module } from '@nestjs/common';
import { PersonWorkshopQualificationService } from './person-workshop-qualification.service';
import { PersonWorkshopQualificationController } from './person-workshop-qualification.controller';
import { PersonWorkshopQualification } from 'src/database/entities/PersonWorkshopQualification';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkshopPersonService } from 'src/database/entities/WorkshopPersonService';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PersonWorkshopQualification,
      WorkshopPersonService,
    ]),
  ],
  controllers: [PersonWorkshopQualificationController],
  providers: [PersonWorkshopQualificationService],
})
export class PersonWorkshopQualificationModule {}
