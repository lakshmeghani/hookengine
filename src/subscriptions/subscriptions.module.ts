import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriptions } from './entities/subscriptions.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subscriptions,])
  ]
})
export class SubscriptionsModule {}
