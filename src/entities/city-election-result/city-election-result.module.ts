import { Module } from '@nestjs/common';
import { CityElectionResult } from './city-election-result.entity';
import { CityElectionResultService } from './city-election-result.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CityElectionResult])],
  providers: [CityElectionResultService],
  exports: [CityElectionResultService],
})
export class CityElectionResultModule {}
