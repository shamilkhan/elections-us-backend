import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { State } from '../state/state.entity';
import { County } from '../county/county.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class City {
  @ApiProperty({ description: 'City identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'City name' })
  @Column()
  name: string;

  @ManyToOne(() => State, { onDelete: 'CASCADE' })
  state: State;

  @ManyToOne(() => County, { onDelete: 'CASCADE' })
  county: County;

  @ApiProperty({ description: 'City geometry' })
  @Column('geometry', { spatialFeatureType: 'Point', srid: 4326 })
  boundary: any;
}
