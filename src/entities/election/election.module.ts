import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Election } from './election.entity';
import { ElectionController } from './election.controller';
import { ElectionService } from './election.service';

@Module({
  imports: [TypeOrmModule.forFeature([Election])],
  controllers: [ElectionController],
  providers: [ElectionService],
})
export class ElectionModule {}
