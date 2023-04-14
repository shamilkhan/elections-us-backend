import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { County } from './county.entity';
import { CountyElectionResultService } from '../county-election-result/county-election-result.service';

@Injectable()
export class CountyService {
  constructor(
    @InjectRepository(County)
    private readonly countyRepository: Repository<County>,
    private readonly countyElectionResultService: CountyElectionResultService,
  ) {}

  findAll(): Promise<County[]> {
    return this.countyRepository.find();
  }

  findOne(id: number): Promise<County> {
    return this.countyRepository.findOneBy({ id });
  }

  findElectionResults(countyId: number) {
    return this.countyElectionResultService.findByCountyId(countyId);
  }
}
