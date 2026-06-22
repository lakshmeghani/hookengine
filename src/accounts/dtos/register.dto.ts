import { IsEmail, IsEnum, IsString } from "class-validator";

export class RegisterAccountDto {

  @IsString()
  companyName: string;

  @IsEmail()
  email: string;

}
