import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CountyService } from './county.service';
import { CountyElectionResultService } from '../county-election-result/county-election-result.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { County } from './county.entity';
import { CountyElectionResult } from '../county-election-result/county-election-result.entity';

@ApiTags('counties')
@Controller('counties')
export class CountyController {
  constructor(
    private readonly countyService: CountyService,
    private readonly countyElectionResultService: CountyElectionResultService,
  ) {}

  @ApiOperation({ summary: 'get all counties' })
  @ApiResponse({ status: 200, description: 'Success', type: [County] })
  @Get()
  findAll() {
    return this.countyService.findAll();
  }

  @ApiOperation({ summary: 'get county by id' })
  @ApiResponse({ status: 200, description: 'Success', type: County })
  @Get(':id')
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.countyService.findOneBy({ id });
  }

  @ApiOperation({ summary: 'get county election results by county id' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: [CountyElectionResult],
  })
  @Get(':id/election-results')
  findElectionResults(@Param('id', ParseIntPipe) id: number) {
    return this.countyElectionResultService.findByCountyId(id);
  }
}
