import { Module } from '@nestjs/common';
import { CountryStateService } from './country-state.service';
import { CountryStateController } from './country-state.controller';

@Module({
  controllers: [CountryStateController],
  providers: [CountryStateService]
})
export class CountryStateModule {}
