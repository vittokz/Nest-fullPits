import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PaymentMethod } from 'src/database/entities/PaymentMethod';
import { WorkshopService } from '../workshop/workshop.service';
import { PaymentMethodService } from './payment-method.service';

@Controller('payment-method')
export class PaymentMethodController {
  constructor(
    private readonly paymentMethodService: PaymentMethodService,
    private readonly workshopService: WorkshopService,
  ) {}

  @Post()
  create(@Body() createPaymentMethodDto: PaymentMethod) {
    return this.paymentMethodService.create(createPaymentMethodDto);
  }

  @Get('get-by-workshop-id')
  findByWorkshopId(@Query('workshopId') workshopId: number) {
    return this.paymentMethodService.findByWorkshopId(workshopId);
  }

  @Get('get-by-id')
  findOne(@Query('id') id: number) {
    return this.paymentMethodService.findById(id);
  }

  @Get()
  findAll() {
    return this.paymentMethodService.findAll();
  }
}
