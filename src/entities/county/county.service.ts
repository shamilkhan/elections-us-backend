import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { County } from './county.entity';
import { FindOptionsWhereId } from 'src/app.interface';

@Injectable()
export class CountyService {
  constructor(
    @InjectRepository(County)
    private readonly countyRepository: Repository<County>,
  ) {}

  findAll(): Promise<County[]> {
    return this.countyRepository.find();
  }

  findOneBy({ id }: FindOptionsWhereId): Promise<County | null> {
    return this.countyRepository.findOneBy({ id });
  }
}
