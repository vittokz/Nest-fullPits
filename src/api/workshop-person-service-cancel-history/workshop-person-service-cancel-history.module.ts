import { Module } from '@nestjs/common';
import { WorkshopPersonServiceCancelHistoryService } from './workshop-person-service-cancel-history.service';
import { WorkshopPersonServiceCancelHistoryController } from './workshop-person-service-cancel-history.controller';

@Module({
  controllers: [WorkshopPersonServiceCancelHistoryController],
  providers: [WorkshopPersonServiceCancelHistoryService]
})
export class WorkshopPersonServiceCancelHistoryModule {}
