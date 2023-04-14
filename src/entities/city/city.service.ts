import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';
import { CityElectionResultService } from './../city-election-result/city-election-result.service';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
    private readonly cityElectionResultService: CityElectionResultService,
  ) {}

  findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  findOneById(id: number): Promise<City | null> {
    return this.cityRepository.findOneBy({ id });
  }

  findElectionResults(cityId: number) {
    return this.cityElectionResultService.findByCityId(cityId);
  }
}
