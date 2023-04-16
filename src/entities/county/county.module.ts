import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { County } from './county.entity';
import { CountyController } from './county.controller';
import { CountyService } from './county.service';
import { CountyElectionResultModule } from '../county-election-result/county-election-result.module';

@Module({
  imports: [TypeOrmModule.forFeature([County]), CountyElectionResultModule],
  controllers: [CountyController],
  providers: [CountyService],
})
export class CountyModule {}
