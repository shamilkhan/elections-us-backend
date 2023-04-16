import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './state.entity';
import { FindOptionsWhereId } from 'src/app.interface';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>,
  ) {}

  findAll(): Promise<State[]> {
    return this.stateRepository.find();
  }

  findOneBy({ id }: FindOptionsWhereId): Promise<State | null> {
    return this.stateRepository.findOneBy({ id });
  }
}
