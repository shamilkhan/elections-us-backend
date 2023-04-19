import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Election } from '../election/election.entity';
import { State } from '../state/state.entity';
import { Candidate } from '../candidate/candidate.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class StateElectionResult {
  @ApiProperty({ description: 'State election result identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Election, { onDelete: 'CASCADE' })
  election: Election;

  @ManyToOne(() => State, { onDelete: 'CASCADE' })
  state: State;

  @ManyToOne(() => Candidate, { onDelete: 'CASCADE' })
  winner: Candidate;

  @ApiProperty({ description: 'Total votes for state' })
  @Column()
  totalVotes: number;

  @ApiProperty({ description: 'Votes by candidates for state' })
  @Column('jsonb')
  candidateVotes: any;
}
