import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Election } from '../election/election.entity';
import { City } from '../city/city.entity';
import { Candidate } from '../candidate/candidate.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class CityElectionResult {
  @ApiProperty({ description: 'City elections result identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Election, { onDelete: 'CASCADE' })
  election: Election;

  @ManyToOne(() => City, { onDelete: 'CASCADE' })
  city: City;

  @ManyToOne(() => Candidate, { onDelete: 'CASCADE' })
  winner: Candidate;

  @ApiProperty({ description: 'Total votes for city' })
  @Column()
  totalVotes: number;

  @ApiProperty({ description: 'Votes by candidates' })
  @Column('jsonb')
  candidateVotes: Record<number, number>;
}
