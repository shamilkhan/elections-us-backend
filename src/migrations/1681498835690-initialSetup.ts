import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSetup1681498835690 implements MigrationInterface {
    name = 'InitialSetup1681498835690'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "party" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e6189b3d533e140bb33a6d2cec1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "candidate" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "partyId" integer, CONSTRAINT "PK_b0ddec158a9a60fbc785281581b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "election" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "year" integer NOT NULL, "type" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_17467b9ade12257d01912737bdb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "state" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "electoralVotes" integer NOT NULL, "boundary" geometry(MultiPolygon,4326) NOT NULL, CONSTRAINT "PK_549ffd046ebab1336c3a8030a12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "county" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "boundary" geometry(MultiPolygon,4326) NOT NULL, "stateId" integer, CONSTRAINT "PK_e64ba58a034afb0e3d15b329351" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "city" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "boundary" geometry(Point,4326) NOT NULL, "stateId" integer, "countyId" integer, CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "city_election_result" ("id" SERIAL NOT NULL, "totalVotes" integer NOT NULL, "candidateVotes" jsonb NOT NULL, "electionId" integer, "cityId" integer, "winnerId" integer, CONSTRAINT "PK_d77a3431b6323f8034c9f58367c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "county_election_result" ("id" SERIAL NOT NULL, "totalVotes" integer NOT NULL, "candidateVotes" jsonb NOT NULL, "electionId" integer, "countyId" integer, "winnerId" integer, CONSTRAINT "PK_60dd53fdc76892293d4311bc90d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "state_election_result" ("id" SERIAL NOT NULL, "totalVotes" integer NOT NULL, "candidateVotes" jsonb NOT NULL, "electionId" integer, "stateId" integer, "winnerId" integer, CONSTRAINT "PK_56a1be9f8dfc306a08e8d1a5543" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "candidate" ADD CONSTRAINT "FK_ee54545f559cc92ca30424fa82f" FOREIGN KEY ("partyId") REFERENCES "party"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "county" ADD CONSTRAINT "FK_4c13926e067e17762475723eabf" FOREIGN KEY ("stateId") REFERENCES "state"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "city" ADD CONSTRAINT "FK_e99de556ee56afe72154f3ed04a" FOREIGN KEY ("stateId") REFERENCES "state"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "city" ADD CONSTRAINT "FK_473f9ba4b3863bf5356a05f0930" FOREIGN KEY ("countyId") REFERENCES "county"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "city_election_result" ADD CONSTRAINT "FK_cf31816a583a42ad3129aa733ed" FOREIGN KEY ("electionId") REFERENCES "election"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "city_election_result" ADD CONSTRAINT "FK_c8fb7ea06758cd18f97fb38c47c" FOREIGN KEY ("cityId") REFERENCES "city"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "city_election_result" ADD CONSTRAINT "FK_d272df6582822ffb340f38a3d31" FOREIGN KEY ("winnerId") REFERENCES "candidate"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "county_election_result" ADD CONSTRAINT "FK_06b7d33f26dffbacc3cf85be967" FOREIGN KEY ("electionId") REFERENCES "election"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "county_election_result" ADD CONSTRAINT "FK_1cc33f36fd79bc46bdb929851a6" FOREIGN KEY ("countyId") REFERENCES "county"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "county_election_result" ADD CONSTRAINT "FK_f0a552136102783c4270f628b80" FOREIGN KEY ("winnerId") REFERENCES "candidate"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "state_election_result" ADD CONSTRAINT "FK_fd20dc1974300858fda5ba21b78" FOREIGN KEY ("electionId") REFERENCES "election"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "state_election_result" ADD CONSTRAINT "FK_a19e55a82f88cc0830cec4aecdc" FOREIGN KEY ("stateId") REFERENCES "state"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "state_election_result" ADD CONSTRAINT "FK_e12bccbbefe4feb191e200b30d3" FOREIGN KEY ("winnerId") REFERENCES "candidate"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "state_election_result" DROP CONSTRAINT "FK_e12bccbbefe4feb191e200b30d3"`);
        await queryRunner.query(`ALTER TABLE "state_election_result" DROP CONSTRAINT "FK_a19e55a82f88cc0830cec4aecdc"`);
        await queryRunner.query(`ALTER TABLE "state_election_result" DROP CONSTRAINT "FK_fd20dc1974300858fda5ba21b78"`);
        await queryRunner.query(`ALTER TABLE "county_election_result" DROP CONSTRAINT "FK_f0a552136102783c4270f628b80"`);
        await queryRunner.query(`ALTER TABLE "county_election_result" DROP CONSTRAINT "FK_1cc33f36fd79bc46bdb929851a6"`);
        await queryRunner.query(`ALTER TABLE "county_election_result" DROP CONSTRAINT "FK_06b7d33f26dffbacc3cf85be967"`);
        await queryRunner.query(`ALTER TABLE "city_election_result" DROP CONSTRAINT "FK_d272df6582822ffb340f38a3d31"`);
        await queryRunner.query(`ALTER TABLE "city_election_result" DROP CONSTRAINT "FK_c8fb7ea06758cd18f97fb38c47c"`);
        await queryRunner.query(`ALTER TABLE "city_election_result" DROP CONSTRAINT "FK_cf31816a583a42ad3129aa733ed"`);
        await queryRunner.query(`ALTER TABLE "city" DROP CONSTRAINT "FK_473f9ba4b3863bf5356a05f0930"`);
        await queryRunner.query(`ALTER TABLE "city" DROP CONSTRAINT "FK_e99de556ee56afe72154f3ed04a"`);
        await queryRunner.query(`ALTER TABLE "county" DROP CONSTRAINT "FK_4c13926e067e17762475723eabf"`);
        await queryRunner.query(`ALTER TABLE "candidate" DROP CONSTRAINT "FK_ee54545f559cc92ca30424fa82f"`);
        await queryRunner.query(`DROP TABLE "state_election_result"`);
        await queryRunner.query(`DROP TABLE "county_election_result"`);
        await queryRunner.query(`DROP TABLE "city_election_result"`);
        await queryRunner.query(`DROP TABLE "city"`);
        await queryRunner.query(`DROP TABLE "county"`);
        await queryRunner.query(`DROP TABLE "state"`);
        await queryRunner.query(`DROP TABLE "election"`);
        await queryRunner.query(`DROP TABLE "candidate"`);
        await queryRunner.query(`DROP TABLE "party"`);
    }

}
