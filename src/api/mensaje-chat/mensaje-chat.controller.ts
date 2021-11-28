import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MensajeChatService } from './mensaje-chat.service';
import { CreateMensajeChatDto } from './dto/create-mensaje-chat.dto';
import { UpdateMensajeChatDto } from './dto/update-mensaje-chat.dto';

@Controller('mensaje-chat')
export class MensajeChatController {
  constructor(private readonly mensajeChatService: MensajeChatService) {}

  @Post()
  create(@Body() createMensajeChatDto: CreateMensajeChatDto) {
    return this.mensajeChatService.create(createMensajeChatDto);
  }

  @Get()
  findAll() {
    return this.mensajeChatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mensajeChatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMensajeChatDto: UpdateMensajeChatDto) {
    return this.mensajeChatService.update(+id, updateMensajeChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mensajeChatService.remove(+id);
  }
}
