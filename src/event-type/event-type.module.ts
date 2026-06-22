import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventTypes } from './entities/event-types.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventTypes,])
  ]
})
export class EventTypesModule {}
