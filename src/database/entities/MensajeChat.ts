import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mensaje_chat')
export class MensajeChat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column({ name: 'is_user' })
  isUser: boolean;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'time_stamp' })
  timeStamp: Date;

  @Column({ name: 'room_chat_id' })
  roomChatId: string;
}
