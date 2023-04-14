import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from './entities/city/city.module';
import { StateModule } from './entities/state/state.module';
import { CountyModule } from './entities/county/county.module';
import { ElectionModule } from './entities/election/election.module';
import { PartyModule } from './entities/party/party.module';
import { CandidateModule } from './entities/candidate/candidate.module';
import { CityElectionResultModule } from './entities/city-election-result/city-election-result.module';
import { CountyElectionResultModule } from './entities/county-election-result/county-election-result.module';
import { StateElectionResultModule } from './entities/state-election-result/state-election-result.module';
import { dataSourceOptions } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dataSourceOptions, autoLoadEntities: true }),
    CityModule,
    StateModule,
    CountyModule,
    ElectionModule,
    PartyModule,
    CandidateModule,
    CityElectionResultModule,
    CountyElectionResultModule,
    StateElectionResultModule,
  ],
})
export class AppModule {}
