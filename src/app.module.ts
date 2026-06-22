import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { AccountsModule } from './accounts/accounts.module';
import { EventTypesModule } from './event-type/event-type.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { EventsModule } from './events/events.module';
import { AuditModule } from './audit/audit.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule, 
    AccountsModule, 
    EventTypesModule, 
    SubscriptionsModule, 
    EventsModule, 
    AuditModule
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      })
    }
  ]
})
export class AppModule {}
