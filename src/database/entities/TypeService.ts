import { Entity, OneToMany } from 'typeorm';
import { AbstractModel } from '../AbstractModel';
import { WorkshopTypeService } from './WorkshopTypeService';

@Entity({ name: 'type_services' })
export class TypeService extends AbstractModel {
  @OneToMany(
    () => WorkshopTypeService,
    (workshopTypeService) => workshopTypeService.typeService,
  )
  workshopTypeServices: WorkshopTypeService[];
}
