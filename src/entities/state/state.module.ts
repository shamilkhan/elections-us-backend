import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State } from './state.entity';
import { StateController } from './state.controller';
import { StateService } from './state.service';
import { StateElectionResultModule } from '../state-election-result/state-election-result.module';

@Module({
  imports: [TypeOrmModule.forFeature([State]), StateElectionResultModule],
  controllers: [StateController],
  providers: [StateService],
})
export class StateModule {}
