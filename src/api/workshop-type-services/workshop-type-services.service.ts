import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkshopTypeService } from 'src/database/entities/WorkshopTypeService';
import { Repository } from 'typeorm';

@Injectable()
export class WorkshopTypeServicesService {
  constructor(
    @InjectRepository(WorkshopTypeService)
    private workshopTypeServiceRepository: Repository<WorkshopTypeService>,
  ) {}
  save(createWorkshopTypeServiceDto: WorkshopTypeService) {
    return this.workshopTypeServiceRepository.save(
      createWorkshopTypeServiceDto,
    );
  }

  saveAll(workshopTypeServiceList: WorkshopTypeService[]) {
    return this.workshopTypeServiceRepository.save(workshopTypeServiceList);
  }

  findByWorshopId(workshopId: number) {
    return this.workshopTypeServiceRepository.find({
      where: { workshop: { id: workshopId } },
      relations: ['typeService'],
    });
  }

  deleteAllByIdIn(workshopTypeServiceList: WorkshopTypeService[]) {
    return this.workshopTypeServiceRepository.remove(workshopTypeServiceList);
  }

  delete(id: number) {
    return this.workshopTypeServiceRepository.delete({ id });
  }
}
