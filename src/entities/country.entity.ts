import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Master } from './master';
import { State } from './state.entity';
@Entity('countries')
export class Country extends Master {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    name: 'country_name',
  })
  countryName: string;
  @OneToMany(() => State, (state) => state.country)
  state: State[];
}
