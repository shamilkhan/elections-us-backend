import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { State } from '../state/state.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class County {
  @ApiProperty({ description: 'County identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'County name' })
  @Column()
  name: string;

  @ManyToOne(() => State, { onDelete: 'CASCADE' })
  state: State;

  @ApiProperty({ description: 'County geometry' })
  @Column('geometry', { spatialFeatureType: 'MultiPolygon', srid: 4326 })
  boundary: any;
}
