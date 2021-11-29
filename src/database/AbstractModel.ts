import { Column, PrimaryGeneratedColumn } from "typeorm";

export class AbstractModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
