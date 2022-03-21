import { IsActive } from 'src/service/is-active';
import { CreateStateDto } from './dto/create-state.dto';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { State } from 'src/entities/state.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class StateRepository {
  constructor(
    @InjectRepository(State)
    private stateRepo: Repository<State>,
  ) {}
  findAllState(search: any) {
    return search;
  }
  findState(slug: string) {
    return slug;
  }
  createState(stateDto: CreateStateDto) {
    return stateDto;
  }
  updateStateStatus(slug: string, status: IsActive) {
    return { slug, status };
  }
}
