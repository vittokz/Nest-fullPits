import { Entity } from 'typeorm';
import { AbstractModel } from '../AbstractModel';

@Entity({ name: 'type_vehicles' })
export class TypeVehicle extends AbstractModel {}
