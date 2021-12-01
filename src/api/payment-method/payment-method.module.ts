import { Module } from '@nestjs/common';
import { PaymentMethodService } from './payment-method.service';
import { PaymentMethodController } from './payment-method.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethod } from 'src/database/entities/PaymentMethod';
import { WorkshopService } from '../workshop/workshop.service';
import { Workshop } from 'src/database/entities/Workshop';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethod, Workshop])],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService, WorkshopService],
})
export class PaymentMethodModule {}
