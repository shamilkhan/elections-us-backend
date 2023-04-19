import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class State {
  @ApiProperty({ description: 'State identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'State name' })
  @Column()
  name: string;

  @ApiProperty({ description: 'State electoral votes' })
  @Column()
  electoralVotes: number;

  @ApiProperty({ description: 'State geometry' })
  @Column('geometry', { spatialFeatureType: 'MultiPolygon', srid: 4326 })
  boundary: any;
}
