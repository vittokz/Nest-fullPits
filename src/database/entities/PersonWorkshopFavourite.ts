import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractModel } from "../AbstractModel";
import { Person } from "./Persona";
import { Workshop } from "./Workshop";

@Entity({ name: "person_workshop_favourite" })
export class PersonWorkshopFavourite {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Workshop, (workshop) => workshop.favouriteWorkshops)
  @JoinColumn({ name: "workshop_id" })
  workshop: Workshop;
  @ManyToOne(() => Person, (person) => person.favouriteWorkshops)
  @JoinColumn({ name: "persona_id" })
  person: Person;
}
