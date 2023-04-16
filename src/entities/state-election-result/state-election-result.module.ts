import { Module } from '@nestjs/common';
import { StateElectionResultService } from './state-election-result.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateElectionResult } from './state-election-result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StateElectionResult])],
  providers: [StateElectionResultService],
  exports: [StateElectionResultService],
})
export class StateElectionResultModule {}
