import { Controller, Get, Param, Patch, UseGuards } from "@nestjs/common";
import { AccountService } from "./accounts.service";
import { AdminGaurd } from "../common/gaurds/admin.gaurd";

@UseGuards(AdminGaurd)
@Controller('/admin/accounts')
export class AdminAccountController {
  constructor (private accountService: AccountService) {}

  @Get('/')
  async getAllAccounts() {
    return await this.accountService.getAllAccounts();
  }

  @Patch('/:id/revoke')
  async revokeAccountAccess(@Param('id') id: string) {
    return await this.accountService.revokeAccountAccess(id);
  }

  @Patch('/:id/activate')
  async activateAccountAccess(@Param('id') id: string) {
    return await this.accountService.activateAccountAccess(id);
  }
}
