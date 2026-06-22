import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventType } from './entities/event-types.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventType,])
  ]
})
export class EventTypesModule {}
