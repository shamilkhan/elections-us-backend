import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ElectionService } from './election.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Election } from './election.entity';

@ApiTags('elections')
@Controller('elections')
export class ElectionController {
  constructor(private readonly electionService: ElectionService) {}

  @ApiOperation({ summary: 'get all elections' })
  @ApiResponse({ status: 200, description: 'Success', type: [Election] })
  @Get()
  findAll() {
    return this.electionService.findAll();
  }

  @ApiOperation({ summary: 'get election by id' })
  @ApiResponse({ status: 200, description: 'Success', type: Election })
  @Get(':id')
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.electionService.findOneBy({ id });
  }
}
