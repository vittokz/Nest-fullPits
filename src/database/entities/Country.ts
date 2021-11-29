import { Entity, OneToMany } from 'typeorm';
import { AbstractModel } from '../AbstractModel';
import { CountryState } from './CountryState';

@Entity({ name: 'countries' })
export class Country extends AbstractModel {
  @OneToMany(() => CountryState, (countryState) => countryState.country)
  countryStates: CountryState[];
}
