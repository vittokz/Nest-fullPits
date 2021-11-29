import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractModel } from '../AbstractModel';
import { PersonWorkshopFavourite } from './PersonWorkshopFavourite';
import { Vehiculo } from './Vehiculo';

@Entity({ name: 'person' })
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  genero: number;

  @Column()
  identificacion: string;

  @Column({ name: 'fecha_nacimiento' })
  fechaNacimiento: Date;

  @Column()
  qualification: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'type' })
  type: number = 1;

  @OneToMany(
    () => PersonWorkshopFavourite,
    (personWorkshopFavourite) => personWorkshopFavourite.person,
  )
  favouriteWorkshops: PersonWorkshopFavourite[];

  @OneToMany(() => Vehiculo, (vehicle) => vehicle.person)
  vehiculos: Vehiculo[];
}
