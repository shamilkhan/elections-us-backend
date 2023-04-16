import { Module } from '@nestjs/common';
import { CountyElectionResultService } from './county-election-result.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountyElectionResult } from './county-election-result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CountyElectionResult])],
  providers: [CountyElectionResultService],
  exports: [CountyElectionResultService],
})
export class CountyElectionResultModule {}
