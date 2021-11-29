import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Fuel } from './fuel';
import { LineaVehiculo } from './LineaVehiculo';
import { Person } from './Persona';

@Entity({ name: 'vehiculos' })
export class Vehiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  placa: string;
  @Column()
  color: string;
  @Column()
  model: number;

  @Column({ name: 'type_vehicle_id' })
  typeVehicleId: number;

  @ManyToOne(() => Person, (person) => person.vehiculos)
  @JoinColumn({ name: 'person_id' })
  person: Person;

  @ManyToOne(() => LineaVehiculo, (lineaVehiculo) => lineaVehiculo.vehiculos)
  @JoinColumn({ name: 'linea_vehiculo_id' })
  linea: LineaVehiculo;

  @OneToOne(() => Fuel)
  @JoinColumn({ name: 'fuel_id' })
  fuel: Fuel;
}
