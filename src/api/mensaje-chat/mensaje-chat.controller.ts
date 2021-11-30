import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MensajeChat } from 'src/database/entities/MensajeChat';
import { MensajeChatService } from './mensaje-chat.service';

@Controller('mensaje-chat')
export class MensajeChatController {
  constructor(private readonly mensajeChatService: MensajeChatService) {}

  @Post()
  create(@Body() createMensajeChatDto: MensajeChat[]) {
    this.mensajeChatService.create(createMensajeChatDto);
    return createMensajeChatDto[0];
  }

  @Get()
  findAll(@Query('roomChatId') roomChatId: string) {
    return this.mensajeChatService.findAll(roomChatId);
  }
}
