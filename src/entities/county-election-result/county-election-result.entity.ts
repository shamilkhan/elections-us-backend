import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Election } from '../election/election.entity';
import { County } from '../county/county.entity';
import { Candidate } from '../candidate/candidate.entity';

@Entity()
export class CountyElectionResult {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Election, { onDelete: 'CASCADE' })
  election: Election;

  @ManyToOne(() => County, { onDelete: 'CASCADE' })
  county: County;

  @ManyToOne(() => Candidate, { onDelete: 'CASCADE' })
  winner: Candidate;

  @Column()
  totalVotes: number;

  @Column('jsonb')
  candidateVotes: Record<string, number>;
}
