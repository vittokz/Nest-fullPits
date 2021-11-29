import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractModel } from '../AbstractModel';
import { LineaVehiculo } from './LineaVehiculo';

@Entity({ name: 'marcas_vehiculos' })
export class MarcaVehiculo extends AbstractModel {
  @Column({ name: 'type_vehicle_id' })
  typeVehicleId: number;

  @OneToMany(() => LineaVehiculo, (lineaVehiculo) => lineaVehiculo.marca)
  lineasVehiculos: LineaVehiculo[];
}
