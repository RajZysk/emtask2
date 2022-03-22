import { IsActive } from 'service/is-active';
import { CreateStateDto } from './dto/create-state.dto';
import { StateRepository } from './states.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StatesService {
  constructor(private stateRepo: StateRepository) {}
  findAllState(search: any) {
    return this.stateRepo.findAllState(search);
  }
  findState(slug: string) {
    return this.stateRepo.findState(slug);
  }
  createState(stateDto: CreateStateDto) {
    return this.stateRepo.createState(stateDto);
  }
  updateStateStatus(slug: string, status: IsActive) {
    return this.stateRepo.updateStateStatus(slug, status);
  }
}
