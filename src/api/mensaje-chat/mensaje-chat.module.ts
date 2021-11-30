import { Module } from '@nestjs/common';
import { MensajeChatService } from './mensaje-chat.service';
import { MensajeChatController } from './mensaje-chat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajeChat } from 'src/database/entities/MensajeChat';

@Module({
  imports: [TypeOrmModule.forFeature([MensajeChat])],
  controllers: [MensajeChatController],
  providers: [MensajeChatService],
})
export class MensajeChatModule {}
