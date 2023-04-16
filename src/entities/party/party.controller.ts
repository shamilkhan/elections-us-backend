import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PartyService } from './party.service';

@Controller('parties')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @Get()
  findAll() {
    return this.partyService.findAll();
  }

  @Get(':id')
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.partyService.findOneBy({ id });
  }
}
