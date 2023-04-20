import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('candidates')
@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Get()
  findAll() {
    return this.candidateService.findAll();
  }

  @Get(':id')
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.candidateService.findOneBy({ id });
  }
}
