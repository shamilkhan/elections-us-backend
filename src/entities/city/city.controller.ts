import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { City } from './city.entity';
import { CityService } from './city.service';
import { CityElectionResultService } from '../city-election-result/city-election-result.service';

@Controller('cities')
export class CityController {
  constructor(
    private readonly cityService: CityService,
    private readonly cityElectionResultService: CityElectionResultService,
  ) {}

  @Get()
  findAll(): Promise<City[]> {
    return this.cityService.findAll();
  }

  @Get(':id')
  findOneBy(@Param('id', ParseIntPipe) id: number): Promise<City> {
    return this.cityService.findOneBy({ id });
  }

  @Get(':id/election-results')
  findElectionResults(@Param('id', ParseIntPipe) id: number) {
    return this.cityElectionResultService.findByCityId(id);
  }
}
