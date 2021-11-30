import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MensajeChat } from 'src/database/entities/MensajeChat';
import { Repository } from 'typeorm';

@Injectable()
export class MensajeChatService {
  constructor(
    @InjectRepository(MensajeChat)
    private mensajeChatRepository: Repository<MensajeChat>,
  ) {}
  create(createMensajeChatDto: MensajeChat[]) {
    return this.mensajeChatRepository.save(createMensajeChatDto);
  }

  findAll(roomChatId: String) {
    return this.mensajeChatRepository.find({
      where: { roomChatId: roomChatId },
    });
  }
}
