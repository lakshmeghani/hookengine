import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { AccountsModule } from './accounts/accounts.module';
import { EventTypesModule } from './event-type/event-type.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { EventsModule } from './events/events.module';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [
    ConfigModule, 
    AccountsModule, 
    EventTypesModule, 
    SubscriptionsModule, 
    EventsModule, 
    AuditModule],
})
export class AppModule {}
