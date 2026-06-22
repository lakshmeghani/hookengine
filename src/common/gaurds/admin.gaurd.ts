import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Observable } from "rxjs";

@Injectable()
export class AdminGaurd implements CanActivate {
  constructor (private configServer: ConfigService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const givenKey = request.headers['x-admin-key'];
    const apiKey = this.configServer.get<string>('ADMIN_API_KEY');

    if (!givenKey) {
      throw new UnauthorizedException('No admin-key provided')
    }

    return givenKey === apiKey;
  }
}
