import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/accounts.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account])
  ]
})
export class AccountsModule {}
