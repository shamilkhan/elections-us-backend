import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ElectionService } from './election.service';

@Controller('api/v1/elections')
export class ElectionController {
  constructor(private readonly electionService: ElectionService) {}

  @Get()
  findAll() {
    return this.electionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.electionService.findOne(id);
  }
}
