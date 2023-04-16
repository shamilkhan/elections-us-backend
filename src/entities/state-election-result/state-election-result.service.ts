import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateElectionResult } from './state-election-result.entity';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class StateElectionResultService {
  constructor(
    @InjectRepository(StateElectionResult)
    private readonly stateElectionResultRepository: Repository<StateElectionResult>,
  ) {}

  findByStateId(stateId: number): Promise<StateElectionResult[]> {
    return this.stateElectionResultRepository.findBy({
      state: Equal(stateId),
    });
  }
}
