import { Module } from '@nestjs/common';
import { WorkshopTypeServicesService } from './workshop-type-services.service';
import { WorkshopTypeServicesController } from './workshop-type-services.controller';

@Module({
  controllers: [WorkshopTypeServicesController],
  providers: [WorkshopTypeServicesService]
})
export class WorkshopTypeServicesModule {}
