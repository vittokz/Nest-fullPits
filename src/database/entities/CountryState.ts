import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { AbstractModel } from '../AbstractModel';
import { City } from './City';
import { Country } from './Country';

@Entity('country_states')
export class CountryState extends AbstractModel {
  @OneToMany(() => City, (city) => city.countryState)
  cities: City[];

  @ManyToOne(() => Country, (country) => country.countryStates)
  @JoinColumn({ name: 'country_id' })
  country: Country;
}
