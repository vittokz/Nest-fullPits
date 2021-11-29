import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Workshop } from "./Workshop";

@Entity("workshop_person_service_problem")
export class WorkshopPersonServiceProblem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  observation: string;

  workshop: Workshop;
}
