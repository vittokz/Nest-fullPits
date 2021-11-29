import { Injectable } from '@nestjs/common';
import { PaymentMethod } from 'src/database/entities/PaymentMethod';

@Injectable()
export class PaymentMethodService {
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
