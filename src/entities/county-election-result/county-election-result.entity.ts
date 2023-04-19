import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Election } from '../election/election.entity';
import { County } from '../county/county.entity';
import { Candidate } from '../candidate/candidate.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class CountyElectionResult {
  @ApiProperty({ description: 'County election result identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Election, { onDelete: 'CASCADE' })
  election: Election;

  @ManyToOne(() => County, { onDelete: 'CASCADE' })
  county: County;

  @ManyToOne(() => Candidate, { onDelete: 'CASCADE' })
  winner: Candidate;

  @ApiProperty({ description: 'Total votes for county' })
  @Column()
  totalVotes: number;

  @ApiProperty({ description: 'Votes by candidates for county' })
  @Column('jsonb')
  candidateVotes: Record<string, number>;
}
