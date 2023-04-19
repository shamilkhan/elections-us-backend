import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  electoralVotes: number;

  @Column('geometry', { spatialFeatureType: 'MultiPolygon', srid: 4326 })
  boundary: any;
}
