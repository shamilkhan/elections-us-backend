import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { City } from './city.entity';
import { CityService } from './city.service';
import { CityElectionResult } from '../city-election-result/city-election-result.entity';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  findAll(): Promise<City[]> {
    return this.cityService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number): Promise<City> {
    return this.cityService.findOneById(id);
  }

  @Get(':id/election-results')
  findElectionResults(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CityElectionResult[]> {
    return this.cityService.findElectionResults(id);
  }
}
