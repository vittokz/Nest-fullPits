import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MensajeChat } from 'src/database/entities/MensajeChat';
import { Repository } from 'typeorm';

@Injectable()
export class MensajeChatService {
  constructor(
    @InjectRepository(MensajeChat) private Repository: Repository<MensajeChat>,
  ) {}
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
