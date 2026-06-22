import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Account } from "./entities/accounts.entity";
import { Repository } from "typeorm";
import { RegisterAccountDto } from "./dtos/register.dto";
import { hashRawKey } from "../common/utils/access-key.utils";
import { AccountStatus } from "./enums/account-status";

@Injectable()
export class AccountService {
  constructor (
    @InjectRepository(Account) 
    private readonly accountRepo: Repository<Account>,
  ) {}

  async register(data: RegisterAccountDto) {
    let account = this.accountRepo.create(data);
  
    // generate access keys
    const newAccessKeys = hashRawKey();
    account.accessKey = newAccessKeys.hashedKey;

    // save access key to db object
    account = await this.accountRepo.save(account);

    // return one time display raw access key
    account.accessKey = newAccessKeys.rawKey;
    return account;
  }

  async getAllAccounts() {
    return await this.accountRepo.find({});
  }

  async revokeAccountAccess(id: string) {
    const account = await this.accountRepo.findOneByOrFail({ id });
    account.status = AccountStatus.REVOKED;
    return await this.accountRepo.save(account);
  }

  async activateAccountAccess(id: string) {
    const account = await this.accountRepo.findOneByOrFail({ id });
    account.status = AccountStatus.ACTIVE;
    return await this.accountRepo.save(account);
  }
}
