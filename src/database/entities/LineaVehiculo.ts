import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { AbstractModel } from '../AbstractModel';
import { MarcaVehiculo } from './MarcaVehiculo';
import { Vehiculo } from './Vehiculo';

@Entity({ name: 'lineas_vehiculos' })
export class LineaVehiculo extends AbstractModel {
  @Column()
  galones: number;

  @Column({ name: 'tipo_combustible' })
  tipoCombustible: string;

  @ManyToOne(
    () => MarcaVehiculo,
    (marcaVehiculo) => marcaVehiculo.lineasVehiculos,
  )
  @JoinColumn({ name: 'marca_id' })
  marca: MarcaVehiculo;

  @OneToMany(() => Vehiculo, (vehicle) => vehicle.linea)
  vehiculos: Vehiculo[];
}
