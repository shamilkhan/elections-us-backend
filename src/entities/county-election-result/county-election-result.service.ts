import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountyElectionResult } from './county-election-result.entity';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class CountyElectionResultService {
  constructor(
    @InjectRepository(CountyElectionResult)
    private readonly countyElectionResultRepository: Repository<CountyElectionResult>,
  ) {}

  findByCountyId(countyId: number): Promise<CountyElectionResult[]> {
    return this.countyElectionResultRepository.findBy({
      county: Equal(countyId),
    });
  }
}
