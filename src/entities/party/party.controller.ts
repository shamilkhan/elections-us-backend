import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PartyService } from './party.service';

@Controller('api/v1/parties')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @Get()
  findAll() {
    return this.partyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.partyService.findOne(id);
  }
}
