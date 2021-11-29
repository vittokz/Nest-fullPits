import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractModel } from '../AbstractModel';
import { CountryState } from './CountryState';

@Entity('cities')
export class City extends AbstractModel {
  @ManyToOne(() => CountryState, (countryState) => countryState.cities)
  @JoinColumn({ name: 'country_states_id' })
  countryState: CountryState;
}
