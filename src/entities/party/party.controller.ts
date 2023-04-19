import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PartyService } from './party.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Party } from './party.entity';

@ApiTags('parties')
@Controller('parties')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @ApiOperation({ summary: 'get all parties' })
  @ApiResponse({ status: 200, description: 'Success', type: [Party] })
  @Get()
  findAll() {
    return this.partyService.findAll();
  }

  @ApiOperation({ summary: 'get party by id' })
  @ApiResponse({ status: 200, description: 'Success', type: Party })
  @Get(':id')
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.partyService.findOneBy({ id });
  }
}
