import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WorkshopPersonService } from './WorkshopPersonService';

@Entity('workshop_person_service_cancel_history')
export class WorkshopPersonServiceCancelHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'date_workshop_reject_service' })
  dateWorkshopRejectService: Date;
  @Column({ name: 'date_cancel_service_from_workshop' })
  dateCancelScheduledServiceFromWorkshop: Date;
  @Column({ name: 'date_cancel_service_from_person' })
  dateCancelServiceFromPerson: Date;

  @Column({ name: 'observation_cancel_scheduled__from_workshop' })
  observationCancelScheduledServiceFromWorkshop: String;

  canceledFromPerson: Boolean;

  canceledFromWorkshop: Boolean;

  @OneToOne(() => WorkshopPersonService, {
    nullable: true,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'service_id' })
  workshopPersonService: WorkshopPersonService;
}
