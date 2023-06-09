import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { State } from '../state/state.entity';
import { County } from '../county/county.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => State, { onDelete: 'CASCADE' })
  state: State;

  @ManyToOne(() => County, { onDelete: 'CASCADE' })
  county: County;

  @Column('geometry', { spatialFeatureType: 'Point', srid: 4326 })
  boundary: any;
}
