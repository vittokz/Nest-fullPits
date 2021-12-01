import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workshop } from 'src/database/entities/Workshop';
import { WorkshopNearUseRequest } from 'src/dto/workshop-near-user-request';
import { Repository } from 'typeorm';

@Injectable()
export class WorkshopService {
  DISTANCE_OFFERT = 2.001;

  constructor(
    @InjectRepository(Workshop)
    private workshopRepository: Repository<Workshop>,
  ) {}
  create(createWorkshopDto: Workshop) {
    if (createWorkshopDto.id) {
      this.findById(createWorkshopDto.id).then((workshopUpdate) => {
        workshopUpdate.name = createWorkshopDto.name;
        workshopUpdate.address = createWorkshopDto.address;
        workshopUpdate.phoneContact = createWorkshopDto.phoneContact;
        workshopUpdate.latitude = createWorkshopDto.latitude;
        workshopUpdate.longitude = createWorkshopDto.longitude;
        return this.workshopRepository.save(workshopUpdate);
      });
    }

    return this.workshopRepository.save(createWorkshopDto);
  }

  findNearByUser(workshopNearUseRequest: WorkshopNearUseRequest) {
    if (workshopNearUseRequest && workshopNearUseRequest.typeServiceList) {
      let serviceListIds: number[] = [];
      workshopNearUseRequest.typeServiceList.forEach((service) =>
        serviceListIds.push(service.id),
      );
      return this.workshopRepository
        .createQueryBuilder('workshop')
        .distinctOn(['id'])
        .innerJoin(
          'workshop.workshopTypeServices',
          'workshopTypeService',
          'workshopTypeService.typeService.id IN (:typeServiceIdList)',
          { typeServiceIdList: serviceListIds },
        )
        .innerJoin(
          'workshop.typeVehicleList',
          'typeVehicleList',
          'typeVehicleList.id = :idVehicle',
          { idVehicle: workshopNearUseRequest.idVehicle },
        )
        .where('workshop.latitude BETWEEN :lowerLatitude AND :upperLatitude', {
          lowerLatitude: workshopNearUseRequest.latitude - this.DISTANCE_OFFERT,
          upperLatitude: workshopNearUseRequest.latitude + this.DISTANCE_OFFERT,
        })
        .andWhere(
          'workshop.longitude BETWEEN :lowerLongitude AND :upperLongitude',
          {
            lowerLongitude:
              workshopNearUseRequest.longitude - this.DISTANCE_OFFERT,
            upperLongitude:
              workshopNearUseRequest.longitude + this.DISTANCE_OFFERT,
          },
        )
        .getMany();
      /*let workshopIdList: number[] = [];

      if (workshopList && workshopList.length) {
        workshopList.forEach((element) => {
          workshopIdList.push(element.id);
        });
      }*/
    }
  }

  findById(id: number) {
    return this.workshopRepository.findOne({
      where: { id: id },
      relations: [
        'typeVehicleList',
        'paymentMethodList',
        'workshopTypeServices',
      ],
    });
  }

  findByUserId(userId: number) {
    return this.workshopRepository.findOne({
      where: { userId: userId },
      relations: [
        'typeVehicleList',
        'paymentMethodList',
        'workshopTypeServices',
      ],
    });
  }

  findAllPaginated(limit: number, start: number) {
    return this.workshopRepository.find({
      take: limit,
      skip: start,
    });
  }

  updateTypeServices(updateWorkshopDto: Workshop) {
    this.findById(updateWorkshopDto.id).then((workshop) => {
      workshop.workshopTypeServices = updateWorkshopDto.workshopTypeServices;
      return this.workshopRepository.save(workshop);
    });
    //return updateWorkshopDto;
  }

  updateOnlineStatus(updateWorkshopDto: Workshop) {
    this.findById(updateWorkshopDto.id).then((workshop) => {
      workshop.online = updateWorkshopDto.online;
      return this.workshopRepository.save(workshop);
    });
    //return updateWorkshopDto;
  }

  updateTypeVehicles(updateWorkshopDto: Workshop) {
    this.findById(updateWorkshopDto.id).then((workshop) => {
      workshop.typeVehicleList = updateWorkshopDto.typeVehicleList;
      return this.workshopRepository.save(workshop);
    });
    //return updateWorkshopDto;
  }

  updateMessagingToken(updateWorkshopDto: Workshop) {
    this.findById(updateWorkshopDto.id).then((workshop) => {
      workshop.firebaseMessagingToken =
        updateWorkshopDto.firebaseMessagingToken;
      return this.workshopRepository.save(workshop);
    });
  }
}
