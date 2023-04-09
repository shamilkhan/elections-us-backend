import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Election } from '../election/election';
import { State } from '../state/state';
import { Candidate } from '../candidate/candidate';

@Entity()
export class StateElectionResult {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Election, { onDelete: 'CASCADE' })
  election: Election;

  @ManyToOne(() => State, { onDelete: 'CASCADE' })
  state: State;

  @ManyToOne(() => Candidate, { onDelete: 'CASCADE' })
  winner: Candidate;

  @Column()
  totalVotes: number;

  @Column('jsonb')
  candidateVotes: any;
}
