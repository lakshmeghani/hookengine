import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookLog } from './entities/audit.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WebhookLog,])
  ]
})
export class AuditModule {}
