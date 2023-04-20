import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StateService } from './state.service';
import { StateElectionResultService } from '../state-election-result/state-election-result.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('states')
@Controller('states')
export class StateController {
  constructor(
    private readonly stateService: StateService,
    private readonly stateElectionResultService: StateElectionResultService,
  ) {}

  @Get()
  findAll() {
    return this.stateService.findAll();
  }

  @Get(':id')
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.stateService.findOneBy({ id });
  }

  @Get(':id/election-results')
  findElectionResults(@Param('id', ParseIntPipe) id: number) {
    return this.stateElectionResultService.findByStateId(id);
  }
}
