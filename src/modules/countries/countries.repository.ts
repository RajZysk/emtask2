import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Country } from 'src/entities/country.entity';
import { IsActive } from 'src/service/is-active';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
@Injectable()
export class CountryRepository {
  constructor(
    @InjectRepository(Country)
    private countryRepo: Repository<Country>,
  ) {}
  findAllCountry(search: any) {
    return search;
  }
  findCountry(slug: string) {
    return slug;
  }
  createCountry(countryDto: CreateCountryDto) {
    return countryDto;
  }
  changeCountryStatus(slug: string, status: IsActive) {
    return { slug, status };
  }
}
