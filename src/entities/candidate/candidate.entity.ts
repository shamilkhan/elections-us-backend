import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Party } from '../party/party.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Candidate {
  @ApiProperty({ description: 'Candidate identifier'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({description: 'Candidate name'})
  @Column()
  name: string;

  @ManyToOne(() => Party, { onDelete: 'CASCADE' })
  party: Party;
}
