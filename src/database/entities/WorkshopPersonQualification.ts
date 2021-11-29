import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Workshop } from './Workshop';
import { WorkshopPersonService } from './WorkshopPersonService';
@Entity({ name: 'workshop_person_qualification' })
export class WorkshopPersonQualification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qualification: number;

  @Column()
  observation: string;

  @Column({ name: 'date_qualification' })
  dateQualification: Date;

  workshop: Workshop;

  workShopPersonService: WorkshopPersonService;

  /*@OneToOne(() => WorkshopPersonService)
  @JoinColumn({ name: "workshop_person_service_id" })
  person: WorkshopPersonService;*/
}
