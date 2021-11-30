import { Module } from '@nestjs/common';
import { WorkshopTypeServicesService } from './workshop-type-services.service';
import { WorkshopTypeServicesController } from './workshop-type-services.controller';
import { WorkshopTypeService } from 'src/database/entities/WorkshopTypeService';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WorkshopTypeService])],
  controllers: [WorkshopTypeServicesController],
  providers: [WorkshopTypeServicesService],
})
export class WorkshopTypeServicesModule {}
