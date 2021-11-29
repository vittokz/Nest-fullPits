import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryController } from './api/countries/country/country.controller';
import { CountryService } from './api/countries/country/country.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './database/entities/Country';
import { Connection } from 'typeorm';
import { CountryStateModule } from './api/country-state/country-state.module';
import { CityModule } from './api/city/city.module';
import { LineaVehiculoModule } from './api/linea-vehiculo/linea-vehiculo.module';
import { MarcaVehiculoModule } from './api/marca-vehiculo/marca-vehiculo.module';
import { MensajeChatModule } from './api/mensaje-chat/mensaje-chat.module';
import { PaymentMethodModule } from './api/payment-method/payment-method.module';
import { PersonWorkshopQualificationModule } from './api/person-workshop-qualification/person-workshop-qualification.module';
import { PersonModule } from './api/person/person.module';
import { TextModule } from './api/text/text.module';
import { TypeLubricantModule } from './api/type-lubricant/type-lubricant.module';
import { TypeVehicleModule } from './api/type-vehicle/type-vehicle.module';
import { TypeServiceModule } from './api/type-service/type-service.module';
import { VehiculoModule } from './api/vehiculo/vehiculo.module';
import { WorkshopModule } from './api/workshop/workshop.module';
import { WorkshopPersonQualificationModule } from './api/workshop-person-qualification/workshop-person-qualification.module';
import { WorkshopPersonServiceCancelHistoryModule } from './api/workshop-person-service-cancel-history/workshop-person-service-cancel-history.module';
import { WorkshopPersonServiceModule } from './api/workshop-person-service/workshop-person-service.module';
import { WorkshopTypeServicesModule } from './api/workshop-type-services/workshop-type-services.module';
import { City } from './database/entities/City';
import { CountryState } from './database/entities/CountryState';
import { Fuel } from './database/entities/fuel';
import { MensajeChat } from './database/entities/MensajeChat';
import { LineaVehiculo } from './database/entities/LineaVehiculo';
import { MarcaVehiculo } from './database/entities/MarcaVehiculo';
import { PaymentMethod } from './database/entities/PaymentMethod';
import { Person } from './database/entities/Persona';
import { PersonWorkshopFavourite } from './database/entities/PersonWorkshopFavourite';
import { PersonWorkshopQualification } from './database/entities/PersonWorkshopQualification';
import { Text } from './database/entities/Text';
import { TypeLubricant } from './database/entities/TypeLubricant';
import { TypeVehicle } from './database/entities/TypeVehicle';
import { TypeService } from './database/entities/TypeService';
import { Vehiculo } from './database/entities/Vehiculo';
import { Workshop } from './database/entities/Workshop';
import { WorkshopPersonQualification } from './database/entities/WorkshopPersonQualification';
import { WorkshopPersonService } from './database/entities/WorkshopPersonService';
import { WorkshopPersonServiceCancelHistory } from './database/entities/WorkshopPersonServiceCancelHistory';
import { WorkshopPersonServiceProblem } from './database/entities/WorkshopPersonServiceProblem';
import { WorkshopTypeService } from './database/entities/WorkshopTypeService';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '93.188.164.175',
      port: 3306,
      username: 'inndexadmin',
      password: 'n7614t1A!Qefxab',
      database: 'inndex_db',
      entities: [
        City,
        Country,
        CountryState,
        Fuel,
        LineaVehiculo,
        MarcaVehiculo,
        MensajeChat,
        PaymentMethod,
        Person,
        PersonWorkshopFavourite,
        PersonWorkshopQualification,
        Text,
        TypeLubricant,
        TypeService,
        TypeVehicle,
        Vehiculo,
        Workshop,
        WorkshopPersonQualification,
        WorkshopPersonService,
        WorkshopPersonServiceCancelHistory,
        WorkshopPersonServiceProblem,
        WorkshopTypeService,
      ],
      logging: false,
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Country]),
    CountryStateModule,
    CityModule,
    LineaVehiculoModule,
    MarcaVehiculoModule,
    MensajeChatModule,
    PaymentMethodModule,
    PersonWorkshopQualificationModule,
    PersonModule,
    TextModule,
    TypeLubricantModule,
    TypeVehicleModule,
    TypeServiceModule,
    VehiculoModule,
    WorkshopModule,
    WorkshopPersonQualificationModule,
    WorkshopPersonServiceCancelHistoryModule,
    WorkshopPersonServiceModule,
    WorkshopTypeServicesModule,
  ],
  controllers: [AppController, CountryController],
  providers: [AppService, CountryService],
  exports: [TypeOrmModule],
})
export class AppModule {
  constructor() {}
}
