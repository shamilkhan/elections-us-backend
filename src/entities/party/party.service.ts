import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Party } from './party.entity';
import { FindOptionsWhereId } from 'src/app.interface';

@Injectable()
export class PartyService {
  constructor(
    @InjectRepository(Party)
    private readonly partyRepository: Repository<Party>,
  ) {}

  findAll(): Promise<Party[]> {
    return this.partyRepository.find();
  }

  findOneBy({ id }: FindOptionsWhereId): Promise<Party | null> {
    return this.partyRepository.findOneBy({ id });
  }
}
