import { Injectable } from '@nestjs/common';
import { MensajeChat } from 'src/database/entities/MensajeChat';

@Injectable()
export class MensajeChatService {
  create(createMensajeChatDto: MensajeChat) {
    return 'This action adds a new mensajeChat';
  }

  findAll() {
    return `This action returns all mensajeChat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mensajeChat`;
  }

  update(id: number, updateMensajeChatDto: MensajeChat) {
    return `This action updates a #${id} mensajeChat`;
  }

  remove(id: number) {
    return `This action removes a #${id} mensajeChat`;
  }
}
