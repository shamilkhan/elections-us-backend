import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StateService } from './state.service';
import { StateElectionResultService } from '../state-election-result/state-election-result.service';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { State } from './state.entity';
import { StateElectionResult } from '../state-election-result/state-election-result.entity';

@ApiTags('states')
@Controller('states')
export class StateController {
  constructor(
    private readonly stateService: StateService,
    private readonly stateElectionResultService: StateElectionResultService,
  ) {}

  @ApiOperation({ summary: 'get all states' })
  @ApiResponse({ status: 200, description: 'Success', type: [State] })
  @Get()
  findAll() {
    return this.stateService.findAll();
  }

  @ApiOperation({ summary: 'get state by id' })
  @ApiResponse({ status: 200, description: 'Success', type: State })
  @Get(':id')
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.stateService.findOneBy({ id });
  }

  @ApiOperation({ summary: 'get election results for state' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: StateElectionResult,
  })
  @Get(':id/election-results')
  findElectionResults(@Param('id', ParseIntPipe) id: number) {
    return this.stateElectionResultService.findByStateId(id);
  }
}
