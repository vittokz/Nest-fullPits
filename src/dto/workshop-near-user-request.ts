import { TypeService } from 'src/database/entities/TypeService';

export class WorkshopNearUseRequest {
  latitude: number;
  longitude: number;
  typeServiceList: TypeService[];
  idVehicle: number;
}
