import { Entity } from 'typeorm';
import { AbstractModel } from '../AbstractModel';

@Entity({ name: 'type_lubricants' })
export class TypeLubricant extends AbstractModel {}
