import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from 'entities/country.entity';
import { CountriesController } from './countries.controller';
import { CountryRepository } from './countries.repository';
import { CountriesService } from './countries.service';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  controllers: [CountriesController],
  providers: [CountriesService, CountryRepository],
})
export class CountriesModule {}
