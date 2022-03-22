import { IsActive } from 'service/is-active';
import { CreateStateDto } from './dto/create-state.dto';
import { getRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { State } from 'entities/state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'entities/country.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class StateRepository {
  constructor(
    @InjectRepository(State)
    private stateRepo: Repository<State>,
  ) {}
  async findAllState(search: any): Promise<any> {
    try {
      const { countryName } = search;
      const query = this.stateRepo.createQueryBuilder('state');
      if (countryName) {
        const country = await getRepository(Country)
          .createQueryBuilder('countries')
          .where('countries.country_name=:countryName', { countryName })
          .getOne();
        const relation = await query
          .where('state.country=:countryid', {
            countryid: country.id,
          })
          .execute();
        return relation;
      } else return query.getMany();
    } catch (error) {
      throw new Error('error in finding all states');
    }
  }
  async findState(slug: string): Promise<any> {
    try {
      const foundState = await this.stateRepo
        .createQueryBuilder()
        .where({ slug })
        .getOne();
      if (!foundState) {
        return { mes: 'state not found' };
      }
      return foundState;
    } catch (error) {
      throw new Error('error while getting state by id');
    }
  }
  async createState(stateDto: CreateStateDto): Promise<any> {
    try {
      const { stateName, country } = stateDto;
      const state = await this.stateRepo
        .createQueryBuilder()
        .where({ stateName })
        .getOne();
      if (!state) {
        const countryid = await getRepository(Country)
          .createQueryBuilder('countries')
          .where('countries.country_name=:countryname', {
            countryname: country,
          })
          .getOne();
        return this.stateRepo
          .createQueryBuilder()
          .insert()
          .into(State)
          .values({
            stateName,
            isActive: IsActive.active,
            slug: uuid(),
            country: countryid.id as any,
          })
          .execute()
          .then(() =>
            this.stateRepo
              .createQueryBuilder('states')
              .where('states.state_name=:state_name', { stateName })
              .getOne(),
          );
      } else return { msg: 'state already exists' };
    } catch (error) {
      throw new Error('error while creating new state');
    }
  }
  async updateStateStatus(slug: string, status: IsActive): Promise<any> {
    try {
      return await this.stateRepo
        .createQueryBuilder()
        .where({ slug })
        .update(State)
        .set({ isActive: status })
        .execute();
    } catch (error) {
      throw new Error('error in changing the state status');
    }
  }
}
