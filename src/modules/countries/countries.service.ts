import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsActive } from 'service/is-active';
import { CountryRepository } from './countries.repository';
import { CreateCountryDto } from './dto/create-country.dto';

@Injectable()
export class CountriesService {
  constructor(private countryRepository: CountryRepository) {}
  // getting all coutries
  findAllCountry(search: any) {
    return this.countryRepository.findAllCountry(search);
  }
  //getting countries by id
  findCountry(slug: string) {
    return this.countryRepository.findCountry(slug);
  }
  // creating new country
  createCountry(countryDto: CreateCountryDto) {
    return this.countryRepository.createCountry(countryDto);
  }
  // updating status of country
  changeCountryStatus(slug: string, status: IsActive) {
    return this.countryRepository.changeCountryStatus(slug, status);
  }
}
