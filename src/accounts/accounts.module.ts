import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/accounts.entity';
import { AccountController } from './accounts.controller';
import { AccountService } from './accounts.service';
import { AdminAccountController } from './admin-account.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account])
  ],
  controllers: [AccountController, AdminAccountController,],
  providers: [AccountService,]
})
export class AccountsModule {}
