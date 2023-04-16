import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Election } from './election.entity';
import { FindOptionsWhereId } from 'src/app.interface';

@Injectable()
export class ElectionService {
  constructor(
    @InjectRepository(Election)
    private readonly electionRepository: Repository<Election>,
  ) {}

  findAll(): Promise<Election[]> {
    return this.electionRepository.find();
  }

  findOneBy({ id }: FindOptionsWhereId): Promise<Election | null> {
    return this.electionRepository.findOneBy({ id });
  }
}
