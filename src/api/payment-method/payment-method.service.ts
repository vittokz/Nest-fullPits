import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethod } from 'src/database/entities/PaymentMethod';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectRepository(PaymentMethod)
    private Repository: Repository<PaymentMethod>,
  ) {}
  create(createPaymentMethodDto: PaymentMethod) {
    return 'This action adds a new paymentMethod';
  }

  findAll() {
    return `This action returns all paymentMethod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentMethod`;
  }

  update(id: number, updatePaymentMethodDto: PaymentMethod) {
    return `This action updates a #${id} paymentMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentMethod`;
  }
}
