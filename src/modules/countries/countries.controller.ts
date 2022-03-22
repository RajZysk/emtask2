import { CountriesService } from './countries.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IsActive } from 'service/is-active';
import { CreateCountryDto } from './dto/create-country.dto';
@ApiTags('countries')
@Controller('countries')
export class CountriesController {
  constructor(private countryService: CountriesService) {}
  @Get()
  @HttpCode(418)
  findAllCountry(@Query() search: any) {
    return this.countryService.findAllCountry(search);
  }
  //getting countries by id
  @Get('/:slug')
  findCountry(@Param('slug') slug: string) {
    return this.countryService.findCountry(slug);
  }
  // creating new country
  @Post('/add')
  createCountry(@Body() countryDto: CreateCountryDto) {
    return this.countryService.createCountry(countryDto);
  }
  // updating status of country
  @Patch('/:slug')
  changeCountryStatus(
    @Param('slug') slug: string,
    @Body('status') status: IsActive,
  ) {
    return this.countryService.changeCountryStatus(slug, status);
  }
}
