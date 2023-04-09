import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Election } from '../election/election';
import { City } from '../city/city';
import { Candidate } from '../candidate/candidate';

@Entity()
export class CityElectionResult {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Election, (election) => election.cityElectionResults)
  election: Election;

  @ManyToOne(() => City, (city) => city.cityElectionResults)
  city: City;

  @ManyToOne(() => Candidate, (candidate) => candidate.cityElectionResults)
  winner: Candidate;

  @Column()
  totalVotes: number;

  @Column('jsonb')
  candidateVotes: Record<number, number>;
}
