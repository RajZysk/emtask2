import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Country } from './country.entity';
import { Master } from './master';
@Entity('states')
export class State extends Master {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    name: 'state_name',
  })
  stateName: string;
  @ManyToOne(() => Country, (country) => country.state)
  @JoinColumn({ name: 'country_id', referencedColumnName: 'id' })
  country: Country;
}
