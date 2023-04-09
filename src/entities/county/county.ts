import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { State } from '../state/state';

@Entity()
export class County {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => State, { onDelete: 'CASCADE' })
  state: State;

  @Column('geometry', { spatialFeatureType: 'MultiPolygon', srid: 4326 })
  boundary: any;
}
