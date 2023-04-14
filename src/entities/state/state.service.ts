import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './state.entity';
import { StateElectionResultService } from './../state-election-result/state-election-result.service';
import { StateElectionResult } from '../state-election-result/state-election-result.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>,
    private readonly stateElectionResultService: StateElectionResultService,
  ) {}

  findAll(): Promise<State[]> {
    return this.stateRepository.find();
  }

  findOne(id: number): Promise<State> {
    return this.stateRepository.findOneBy({ id });
  }

  findElectionResults(id: number): Promise<StateElectionResult[]> {
    return this.stateElectionResultService.findByStateId(id);
  }
}
