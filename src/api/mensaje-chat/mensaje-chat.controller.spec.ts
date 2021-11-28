import { Test, TestingModule } from '@nestjs/testing';
import { MensajeChatController } from './mensaje-chat.controller';
import { MensajeChatService } from './mensaje-chat.service';

describe('MensajeChatController', () => {
  let controller: MensajeChatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MensajeChatController],
      providers: [MensajeChatService],
    }).compile();

    controller = module.get<MensajeChatController>(MensajeChatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
