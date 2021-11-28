import { Test, TestingModule } from '@nestjs/testing';
import { MensajeChatService } from './mensaje-chat.service';

describe('MensajeChatService', () => {
  let service: MensajeChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MensajeChatService],
    }).compile();

    service = module.get<MensajeChatService>(MensajeChatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
