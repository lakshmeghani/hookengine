import { Body, Controller, Get, Post } from "@nestjs/common";
import { AccountService } from "./accounts.service";
import { RegisterAccountDto } from "./dtos/register.dto";

@Controller('/v1/accounts')
export class AccountController {
  constructor (private accountService: AccountService) {}

  @Post('/')
  async registerAccount(@Body() body: RegisterAccountDto) {
    return await this.accountService.register(body);
  }
}
