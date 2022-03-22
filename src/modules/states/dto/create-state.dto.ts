import { Country } from 'entities/country.entity';

export class CreateStateDto {
  stateName: string;
  country: string;
}
