import { PartialType } from '@nestjs/mapped-types';
import { CreateMensajeChatDto } from './create-mensaje-chat.dto';

export class UpdateMensajeChatDto extends PartialType(CreateMensajeChatDto) {}
