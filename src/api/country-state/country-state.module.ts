import { Module } from '@nestjs/common';
import { CountryStateService } from './country-state.service';
import { CountryStateController } from './country-state.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryState } from 'src/database/entities/CountryState';

@Module({
  imports: [TypeOrmModule.forFeature([CountryState])],
  controllers: [CountryStateController],
  providers: [CountryStateService],
})
export class CountryStateModule {}
