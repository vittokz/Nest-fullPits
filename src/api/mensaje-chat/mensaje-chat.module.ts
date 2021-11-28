import { Module } from '@nestjs/common';
import { MensajeChatService } from './mensaje-chat.service';
import { MensajeChatController } from './mensaje-chat.controller';

@Module({
  controllers: [MensajeChatController],
  providers: [MensajeChatService]
})
export class MensajeChatModule {}
