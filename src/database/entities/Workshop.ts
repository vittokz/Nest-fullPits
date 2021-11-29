import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { AbstractModel } from '../AbstractModel';
import { PaymentMethod } from './PaymentMethod';
import { PersonWorkshopFavourite } from './PersonWorkshopFavourite';
import { TypeVehicle } from './TypeVehicle';
import { WorkshopTypeService } from './WorkshopTypeService';

@Entity({ name: 'workshops' })
export class Workshop extends AbstractModel {
  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  address: string;

  @Column()
  qualification: number;

  @Column()
  online: boolean;

  @Column({ name: 'phone_contact' })
  phoneContact: string;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'firebase_messaging_token' })
  firebaseMessagingToken: string;

  @OneToMany(
    () => PersonWorkshopFavourite,
    (personWorkshopFavourite) => personWorkshopFavourite.workshop,
  )
  favouriteWorkshops: PersonWorkshopFavourite[];

  @OneToMany(
    () => WorkshopTypeService,
    (workshopTypeService) => workshopTypeService.workshop,
  )
  workshopTypeServices: WorkshopTypeService[];

  @ManyToMany((paymentMethod) => PaymentMethod)
  @JoinTable({
    name: 'workshop_payment_methods',
    joinColumn: {
      name: 'workshop_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'payment_method_id',
      referencedColumnName: 'id',
    },
  })
  paymentMethodList: PaymentMethod[];

  @ManyToMany((typeVehicle) => TypeVehicle)
  @JoinTable({
    name: 'workshop_type_vehicles',
    joinColumn: {
      name: 'workshop_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'type_vehicle_id',
      referencedColumnName: 'id',
    },
  })
  typeVehicleList: TypeVehicle[];
}
