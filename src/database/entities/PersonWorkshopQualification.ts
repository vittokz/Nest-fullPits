import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'person_workshop_qualification' })
export class PersonWorkshopQualification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qualification: number;

  @Column()
  observation: string;

  @Column({ name: 'date_qualification' })
  dateQualification: Date;
}
