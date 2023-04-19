import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Party {
  @ApiProperty({ description: 'Party identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Party name' })
  @Column()
  name: string;
}
