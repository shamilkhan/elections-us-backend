import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './candidate.entity';
import { FindOptionsWhereId } from 'src/app.interface';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate)
    private readonly candidateRepository: Repository<Candidate>,
  ) {}

  findAll(): Promise<Candidate[]> {
    return this.candidateRepository.find();
  }

  findOneBy({ id }: FindOptionsWhereId): Promise<Candidate | null> {
    return this.candidateRepository.findOneBy({ id });
  }
}
