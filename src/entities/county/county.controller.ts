import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CountyService } from './county.service';
import { CountyElectionResultService } from '../county-election-result/county-election-result.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('counties')
@Controller('counties')
export class CountyController {
  constructor(
    private readonly countyService: CountyService,
    private readonly countyElectionResultService: CountyElectionResultService,
  ) {}

  @Get()
  findAll() {
    return this.countyService.findAll();
  }

  @Get(':id')
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.countyService.findOneBy({ id });
  }

  @Get(':id/election-results')
  findElectionResults(@Param('id', ParseIntPipe) id: number) {
    return this.countyElectionResultService.findByCountyId(id);
  }
}
