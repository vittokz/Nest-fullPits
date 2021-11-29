import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractModel } from '../AbstractModel';

@Entity({ name: 'texts' })
export class Text {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  texto: string;
}
