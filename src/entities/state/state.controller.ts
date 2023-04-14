import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  findAll() {
    return this.stateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.stateService.findOne(id);
  }

  @Get(':id/election-results')
  findElectionResults(@Param('id', ParseIntPipe) id: number) {
    return this.stateService.findElectionResults(id);
  }
}
