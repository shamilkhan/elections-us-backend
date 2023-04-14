import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Party } from './party.entity';

@Injectable()
export class PartyService {
  constructor(
    @InjectRepository(Party)
    private readonly partyRepository: Repository<Party>,
  ) {}

  findAll(): Promise<Party[]> {
    return this.partyRepository.find();
  }

  findOne(id: number): Promise<Party> {
    return this.partyRepository.findOneBy({ id });
  }
}
