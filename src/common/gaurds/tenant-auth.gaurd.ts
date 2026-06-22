import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Account } from "src/accounts/entities/accounts.entity";
import { Repository } from "typeorm";

@Injectable()
export class TenantAuthGaurd implements CanActivate {
  constructor (
    @InjectRepository(Account) private accountRepo: Repository<Account>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const givenKey = request.headers['x-access-key'];
    const accessKey = await this.accountRepo.findOneByOrFail({ accessKey: givenKey })

    if (!givenKey) {
      throw new UnauthorizedException('No access-key provided')
    }

    return givenKey === accessKey;

  }
}
