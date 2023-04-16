import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ElectionService } from './election.service';

@Controller('elections')
export class ElectionController {
  constructor(private readonly electionService: ElectionService) {}

  @Get()
  findAll() {
    return this.electionService.findAll();
  }

  @Get(':id')
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.electionService.findOneBy({ id });
  }
}
