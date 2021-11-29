import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeService } from './TypeService';
import { Workshop } from './Workshop';

@Entity({ name: 'workshop_type_services' })
export class WorkshopTypeService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @ManyToOne(() => Workshop, (workshop) => workshop.workshopTypeServices)
  @JoinColumn({ name: 'workshop_id' })
  workshop: Workshop;

  @ManyToOne(
    () => TypeService,
    (typeService) => typeService.workshopTypeServices,
  )
  @JoinColumn({ name: 'type_service_id' })
  typeService: TypeService;
}
