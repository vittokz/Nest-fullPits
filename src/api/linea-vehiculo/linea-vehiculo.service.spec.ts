import { Test, TestingModule } from '@nestjs/testing';
import { LineaVehiculoService } from './linea-vehiculo.service';

describe('LineaVehiculoService', () => {
  let service: LineaVehiculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineaVehiculoService],
    }).compile();

    service = module.get<LineaVehiculoService>(LineaVehiculoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
