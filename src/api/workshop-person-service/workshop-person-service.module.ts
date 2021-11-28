import { Module } from '@nestjs/common';
import { WorkshopPersonServiceService } from './workshop-person-service.service';
import { WorkshopPersonServiceController } from './workshop-person-service.controller';

@Module({
  controllers: [WorkshopPersonServiceController],
  providers: [WorkshopPersonServiceService]
})
export class WorkshopPersonServiceModule {}
