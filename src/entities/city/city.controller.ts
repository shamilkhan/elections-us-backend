import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CityService } from './city.service';
import { CityElectionResultService } from '../city-election-result/city-election-result.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cities')
@Controller('cities')
export class CityController {
  constructor(
    private readonly cityService: CityService,
    private readonly cityElectionResultService: CityElectionResultService,
  ) {}

  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @Get(':id')
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.cityService.findOneBy({ id });
  }

  @Get(':id/election-results')
  findElectionResults(@Param('id', ParseIntPipe) id: number) {
    return this.cityElectionResultService.findByCityId(id);
  }
}
