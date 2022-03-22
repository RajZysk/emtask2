import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Country } from 'entities/country.entity';
import { IsActive } from 'service/is-active';
import { getRepository, Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { State } from 'entities/state.entity';
@Injectable()
export class CountryRepository {
  constructor(
    @InjectRepository(Country)
    private countryRepo: Repository<Country>,
  ) {}
  async findAllCountry(search: any): Promise<any> {
    try {
      const { stateName } = search;
      if (stateName) {
        const state = await getRepository(State)
          .createQueryBuilder('state')
          .select()
          .addSelect('state.country')
          .where('state.state_name=:stateName', { stateName })
          .getOne();
        console.log(state);
      }
    } catch (error) {
      console.log(error);
    }
  }
  //getting countries by id
  async findCountry(slug: string): Promise<any> {
    try {
      const foundCountry = await this.countryRepo
        .createQueryBuilder()
        .where({ slug })
        .getOne();
      if (!foundCountry) {
        return { mes: 'country not found' };
      }
      return foundCountry;
    } catch (error) {
      throw new Error("'error in finding country'");
    }
  }
  // creating new country
  async createCountry(countryDto: CreateCountryDto): Promise<any> {
    try {
      const { countryName } = countryDto;
      const country = await this.countryRepo
        .createQueryBuilder()
        .where({ countryName })
        .getOne();
      if (!country) {
        return this.countryRepo
          .createQueryBuilder()
          .insert()
          .into(Country)
          .values({
            countryName,
            isActive: IsActive.active,
            slug: countryName.split(' ').join('-'),
          })
          .execute()
          .catch(() => {
            'error in creating new task';
          });
      } else return { msg: 'country already exists' };
    } catch (error) {
      throw new Error("'error in creating new country'");
    }
  }
  // updating status of country
  async changeCountryStatus(slug: string, status: IsActive): Promise<any> {
    try {
      const report = await this.countryRepo
        .createQueryBuilder()
        .where({ slug })
        .update()
        .set({ isActive: status })
        .execute();
      if (report.affected === 0) {
        return { mes: 'please provide a valid id' };
      }
      return { mes: 'updated successfully' };
    } catch (error) {
      throw new Error('error in  updating');
    }
  }
}
