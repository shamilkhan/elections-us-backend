import { Controller, Get, Param, ParseIntPipe, Req } from '@nestjs/common';
import { Candidate } from './candidate.entity';
import { CandidateService } from './candidate.service';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Get()
  findAll(): Promise<Candidate[]> {
    return this.candidateService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number): Promise<Candidate> {
    return this.candidateService.findOneById(id);
  }
}
