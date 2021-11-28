import { Injectable } from '@nestjs/common';
import { CreateMensajeChatDto } from './dto/create-mensaje-chat.dto';
import { UpdateMensajeChatDto } from './dto/update-mensaje-chat.dto';

@Injectable()
export class MensajeChatService {
  create(createMensajeChatDto: CreateMensajeChatDto) {
    return 'This action adds a new mensajeChat';
  }

  findAll() {
    return `This action returns all mensajeChat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mensajeChat`;
  }

  update(id: number, updateMensajeChatDto: UpdateMensajeChatDto) {
    return `This action updates a #${id} mensajeChat`;
  }

  remove(id: number) {
    return `This action removes a #${id} mensajeChat`;
  }
}
