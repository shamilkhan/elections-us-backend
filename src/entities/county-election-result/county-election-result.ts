import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Election } from '../election/election';
import { County } from '../county/county';
import { Candidate } from '../candidate/candidate';

@Entity()
export class CountyElectionResult {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Election, election => election.countyResults)
  election: Election;

  @ManyToOne(() => County, county => county.electionResults)
  county: County;

  @ManyToOne(() => Candidate, candidate => candidate.countyResults)
  winner: Candidate;

  @Column()
  totalVotes: number;

  @Column('jsonb')
  candidateVotes: Record<string, number>;
}
