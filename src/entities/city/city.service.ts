import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';
import { FindOptionsWhereId } from 'src/app.interface';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  findOneBy({ id }: FindOptionsWhereId): Promise<City | null> {
    return this.cityRepository.findOneBy({ id });
  }
}
