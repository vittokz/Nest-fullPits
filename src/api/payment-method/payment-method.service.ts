import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethod } from 'src/database/entities/PaymentMethod';
import { Workshop } from 'src/database/entities/Workshop';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectRepository(PaymentMethod)
    private paymentMethodRepository: Repository<PaymentMethod>,
    private workshopRepository: Repository<Workshop>,
  ) {}
  create(createPaymentMethodDto: PaymentMethod) {
    return this.paymentMethodRepository.save(createPaymentMethodDto);
  }

  findByWorkshopId(workshopId: number) {
    return this.workshopRepository.findOne({
      where: { id: workshopId },
      relations: ['paymentMethodList'],
    });
  }

  findById(id: number) {
    return this.paymentMethodRepository.findOne({
      id: id,
    });
  }

  findAll() {
    return this.paymentMethodRepository.find();
  }
}
