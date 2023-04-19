import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { City } from './city.entity';
import { CityService } from './city.service';
import { CityElectionResultService } from '../city-election-result/city-election-result.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CityElectionResult } from '../city-election-result/city-election-result.entity';

@ApiTags('cities')
@Controller('cities')
export class CityController {
  constructor(
    private readonly cityService: CityService,
    private readonly cityElectionResultService: CityElectionResultService,
  ) {}

  @ApiOperation({ summary: 'get all cities' })
  @ApiResponse({ status: 200, description: 'Success', type: [City] })
  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @ApiOperation({ summary: 'get city by id' })
  @ApiResponse({ status: 200, description: 'Success', type: City })
  @Get(':id')
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.cityService.findOneBy({ id });
  }

  @ApiOperation({ summary: 'get election results by city id' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: [CityElectionResult],
  })
  @Get(':id/election-results')
  findElectionResults(@Param('id', ParseIntPipe) id: number) {
    return this.cityElectionResultService.findByCityId(id);
  }
}
