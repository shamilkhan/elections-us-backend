import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1649617383763 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS postgis;');
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS states (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      electoral_votes INTEGER NOT NULL,
      boundary geometry(MULTIPOLYGON, 4326)
    )`);
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS counties (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      state_id INTEGER REFERENCES states(id) NOT NULL,
      boundary geometry(MULTIPOLYGON, 4326)
    )`);
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS cities (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      state_id INTEGER REFERENCES states(id) NOT NULL,
      county_id INTEGER REFERENCES counties(id) NOT NULL,
      boundary geometry(POINT, 4326)
    )`);
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS parties (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )`);
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS candidates (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      party_id INTEGER REFERENCES parties(id) NOT NULL
    )`);
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS elections (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      year INTEGER NOT NULL,
      type VARCHAR(255) NOT NULL,
      start_date DATE NOT NULL,
      end_date DATE NOT NULL
    )`);
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS state_election_results (
      id SERIAL PRIMARY KEY,
      election_id INTEGER REFERENCES elections(id) NOT NULL,
      state_id INTEGER REFERENCES states(id) NOT NULL,
      winner_id INTEGER REFERENCES candidates(id) NOT NULL,
      total_votes INTEGER NOT NULL,
      candidate_votes JSONB NOT NULL
    )`);
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS county_election_results (
      id SERIAL PRIMARY KEY,
      election_id INTEGER REFERENCES elections(id) NOT NULL,
      county_id INTEGER REFERENCES counties(id) NOT NULL,
      winner_id INTEGER REFERENCES candidates(id) NOT NULL,
      total_votes INTEGER NOT NULL,
      candidate_votes JSONB NOT NULL
    )`);
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS city_election_results (
      id SERIAL PRIMARY KEY,
      election_id INTEGER REFERENCES elections(id) NOT NULL,
      city_id INTEGER REFERENCES cities(id) NOT NULL,
      winner_id INTEGER REFERENCES candidates(id) NOT NULL,
      total_votes INTEGER NOT NULL,
      candidate_votes JSONB NOT NULL
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS state_election_results;');
    await queryRunner.query('DROP TABLE IF EXISTS county_election_results;');
    await queryRunner.query('DROP TABLE IF EXISTS city_election_results;');
    await queryRunner.query('DROP TABLE IF EXISTS elections;');
    await queryRunner.query('DROP TABLE IF EXISTS candidates;');
    await queryRunner.query('DROP TABLE IF EXISTS parties;');
    await queryRunner.query('DROP TABLE IF EXISTS cities;');
    await queryRunner.query('DROP TABLE IF EXISTS counties;');
    await queryRunner.query('DROP TABLE IF EXISTS states;');
    await queryRunner.query('DROP EXTENSION IF EXISTS postgis;');
  }
}
