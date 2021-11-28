import { Test, TestingModule } from '@nestjs/testing';
import { LineaVehiculoController } from './linea-vehiculo.controller';
import { LineaVehiculoService } from './linea-vehiculo.service';

describe('LineaVehiculoController', () => {
  let controller: LineaVehiculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LineaVehiculoController],
      providers: [LineaVehiculoService],
    }).compile();

    controller = module.get<LineaVehiculoController>(LineaVehiculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
