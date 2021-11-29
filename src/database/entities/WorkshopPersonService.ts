import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PaymentMethod } from './PaymentMethod';
import { Person } from './Persona';
import { PersonWorkshopQualification } from './PersonWorkshopQualification';
import { TypeLubricant } from './TypeLubricant';
import { TypeService } from './TypeService';
import { Vehiculo } from './Vehiculo';
import { Workshop } from './Workshop';
import { WorkshopPersonQualification } from './WorkshopPersonQualification';
import { WorkshopPersonServiceProblem } from './WorkshopPersonServiceProblem';

@Entity({ name: 'workshop_person_service' })
export class WorkshopPersonService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'category' })
  category: number;

  @Column({ name: 'state_id' })
  stateId: number;

  @Column({ name: 'state_name' })
  stateName: string;

  @Column({ name: 'additional_comments' })
  additionalComments: string;

  @Column({ name: 'additional_comments_workshop_offer' })
  additionalCommentsWorkshopOffer: string;

  @Column({ name: 'workshop_change_schedule_date' })
  workshopChangeScheduleDate: boolean;

  @Column({ name: 'user_accept_date_change' })
  userAcceptDateChange: boolean;

  @Column({ name: 'cotizacion' })
  cotizacion: boolean;

  @Column({ name: 'date_created' })
  dateCreated: Date;

  @Column({ name: 'date_start' })
  dateStart: Date;

  @Column({ name: 'date_end' })
  dateEnd: Date;

  @Column({ name: 'date_canceled' })
  dateCanceled: Date;

  @Column({ name: 'date_scheduled' })
  dateScheduled: Date;

  @Column({ name: 'date_workshop_scheduled_changed' })
  dateWorkshopChanged: Date;

  @Column({ name: 'time_estimated' })
  timeEstimated: string;

  @Column({ name: 'total_estimated' })
  totalEstimated: number;

  @Column({ name: 'total' })
  total: number;

  @Column({ name: 'cancel_reason' })
  cancelReason: string;

  @Column({ name: 'user_address' })
  userAddress: string;

  @Column({ name: 'additional_services' })
  additionalServices: string;

  @Column({ name: 'room_chat_id' })
  roomChatId: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column({ name: 'firebase_messaging_token' })
  firebaseMessagingToken: string;

  @Column({ name: 'workshop_notification_count' })
  workshopNotificationCount: number = 0;

  @OneToOne(() => WorkshopPersonQualification, {
    cascade: true,
    nullable: true,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'workshop_person_qualification_id' })
  workshopPersonQualification: WorkshopPersonQualification;

  @OneToOne(() => PersonWorkshopQualification, {
    nullable: true,
    cascade: true,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'person_workshop_qualification_id' })
  personWorkshopQualification: PersonWorkshopQualification;

  @ManyToMany((type) => TypeService)
  @JoinTable({
    name: 'workshop_person_type_service',
    joinColumn: {
      name: 'workshop_person_service_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'type_service_id',
      referencedColumnName: 'id',
    },
  })
  typeServiceList: TypeService[];

  @OneToOne(() => Vehiculo)
  @JoinColumn({ name: 'vehiculo_id' })
  vehiculo: Vehiculo;

  @OneToOne(() => Workshop)
  @JoinColumn({ name: 'workshop_id' })
  workshop: Workshop;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'persona_id' })
  person: Person;

  @OneToOne(() => TypeLubricant, {
    nullable: true,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'type_lubricant_id' })
  typeLubricant: TypeLubricant;

  @OneToOne(() => PaymentMethod, {
    nullable: true,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'payment_method_id' })
  paymentMethod: PaymentMethod;

  /**
   * Problem reported by the workshop
   */
  @OneToOne(() => WorkshopPersonServiceProblem, {
    nullable: true,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'person_problem_id' })
  personProblem: WorkshopPersonServiceProblem;
}
