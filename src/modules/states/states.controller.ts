import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IsActive } from 'service/is-active';
import { CreateStateDto } from './dto/create-state.dto';
import { StatesService } from './states.service';
@ApiTags('state')
@Controller('states')
export class StatesController {
  constructor(private stateService: StatesService) {}
  @Get()
  findAllState(@Query() search: any) {
    return this.stateService.findAllState(search);
  }
  @Get('/:slug')
  findSate(@Param('slug') slug: string) {
    return this.stateService.findState(slug);
  }
  @Post()
  createState(@Body() stateDto: CreateStateDto) {
    return this.stateService.createState(stateDto);
  }
  @Patch('/:slug')
  updateStateStatus(
    @Param('slug') slug: string,
    @Body('status') status: IsActive,
  ) {
    return this.stateService.updateStateStatus(slug, status);
  }
}
