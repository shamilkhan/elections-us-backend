import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Election {
  @ApiProperty({ description: 'Election identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Election name' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Election year' })
  @Column()
  year: number;

  @ApiProperty({ description: 'Election type' })
  @Column()
  type: string;

  @ApiProperty({ description: 'Election start date' })
  @Column()
  startDate: Date;

  @ApiProperty({ description: 'Election end date' })
  @Column()
  endDate: Date;
}
