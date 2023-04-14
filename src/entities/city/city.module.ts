import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './city.entity';
import { CityElectionResultModule } from '../city-election-result/city-election-result.module';

@Module({
  imports: [TypeOrmModule.forFeature([City]), CityElectionResultModule],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
