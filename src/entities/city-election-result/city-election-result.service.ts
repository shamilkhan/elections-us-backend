import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityElectionResult } from './city-election-result.entity';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class CityElectionResultService {
  constructor(
    @InjectRepository(CityElectionResult)
    private readonly cityElectionResultRepository: Repository<CityElectionResult>,
  ) {}

  findByCityId(cityId: number): Promise<CityElectionResult[]> {
    return this.cityElectionResultRepository.findBy({ city: Equal(cityId) });
  }
}
