import { AbstractModel } from 'src/utils/AbstractModel';
import { Entity } from 'typeorm';

@Entity({ name: 'countries' })
export class Country extends AbstractModel {
  //@OneToMany(() => CountryState, (countryState) => countryState.country)
  //countryStates: CountryState[];
}
