import { Entity } from 'typeorm';
import { AbstractModel } from '../AbstractModel';

@Entity({ name: 'payment_methods' })
export class PaymentMethod extends AbstractModel {}
