import { Module } from '@nestjs/common';
import { WorkshopPersonServiceCancelHistoryService } from './workshop-person-service-cancel-history.service';
import { WorkshopPersonServiceCancelHistoryController } from './workshop-person-service-cancel-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkshopPersonServiceCancelHistory } from 'src/database/entities/WorkshopPersonServiceCancelHistory';

@Module({
  imports: [TypeOrmModule.forFeature([WorkshopPersonServiceCancelHistory])],
  controllers: [WorkshopPersonServiceCancelHistoryController],
  providers: [WorkshopPersonServiceCancelHistoryService],
})
export class WorkshopPersonServiceCancelHistoryModule {}
