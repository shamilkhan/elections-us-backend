import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CountyService } from './county.service';

@Controller('api/v1/counties')
export class CountyController {
  constructor(private readonly countyService: CountyService) {}

  @Get()
  findAll() {
    return this.countyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.countyService.findOne(id);
  }

  @Get(':id/election-results')
  findElectionResults(@Param('id', ParseIntPipe) id: number) {
    return this.countyService.findElectionResults(id);
  }
}
