import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Election } from './election.entity';

@Injectable()
export class ElectionService {
  constructor(
    @InjectRepository(Election)
    private readonly electionRepository: Repository<Election>,
  ) {}

  findAll(): Promise<Election[]> {
    return this.electionRepository.find();
  }

  findOne(id: number): Promise<Election> {
    return this.electionRepository.findOneBy({ id });
  }
}
