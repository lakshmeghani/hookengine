import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookEvent } from './entities/events.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WebhookEvent,])
  ]
})
export class EventsModule {}
