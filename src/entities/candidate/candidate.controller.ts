import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Candidate } from './candidate.entity';
import { CandidateService } from './candidate.service';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('candidates')
@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @ApiOperation({ summary: 'get all candidates' })
  @ApiResponse({ status: 200, description: 'Success', type: [Candidate] })
  @Get()
  findAll() {
    return this.candidateService.findAll();
  }

  @ApiOperation({ summary: 'get candidate by id' })
  @ApiResponse({ status: 200, description: 'Success', type: Candidate })
  @Get(':id')
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.candidateService.findOneBy({ id });
  }
}
