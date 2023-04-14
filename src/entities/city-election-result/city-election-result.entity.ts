import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Election } from '../election/election.entity';
import { City } from '../city/city.entity';
import { Candidate } from '../candidate/candidate.entity';

@Entity()
export class CityElectionResult {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Election, { onDelete: 'CASCADE' })
  election: Election;

  @ManyToOne(() => City, { onDelete: 'CASCADE' })
  city: City;

  @ManyToOne(() => Candidate, { onDelete: 'CASCADE' })
  winner: Candidate;

  @Column()
  totalVotes: number;

  @Column('jsonb')
  candidateVotes: Record<number, number>;
}
