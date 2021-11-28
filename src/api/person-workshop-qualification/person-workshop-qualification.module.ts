import { Module } from '@nestjs/common';
import { PersonWorkshopQualificationService } from './person-workshop-qualification.service';
import { PersonWorkshopQualificationController } from './person-workshop-qualification.controller';

@Module({
  controllers: [PersonWorkshopQualificationController],
  providers: [PersonWorkshopQualificationService]
})
export class PersonWorkshopQualificationModule {}
