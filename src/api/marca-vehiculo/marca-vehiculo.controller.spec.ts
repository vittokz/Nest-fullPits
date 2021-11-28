import { Test, TestingModule } from '@nestjs/testing';
import { MarcaVehiculoController } from './marca-vehiculo.controller';
import { MarcaVehiculoService } from './marca-vehiculo.service';

describe('MarcaVehiculoController', () => {
  let controller: MarcaVehiculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarcaVehiculoController],
      providers: [MarcaVehiculoService],
    }).compile();

    controller = module.get<MarcaVehiculoController>(MarcaVehiculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
