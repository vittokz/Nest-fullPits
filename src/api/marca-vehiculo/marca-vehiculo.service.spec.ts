import { Test, TestingModule } from '@nestjs/testing';
import { MarcaVehiculoService } from './marca-vehiculo.service';

describe('MarcaVehiculoService', () => {
  let service: MarcaVehiculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarcaVehiculoService],
    }).compile();

    service = module.get<MarcaVehiculoService>(MarcaVehiculoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
