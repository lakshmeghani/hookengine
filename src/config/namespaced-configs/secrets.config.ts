import { registerAs } from "@nestjs/config";

export const secretsConfig = registerAs('secrets', () => ({
  // validation by joi ==> src/config/config.schema
  ADMIN_API_KEY: process.env.ADMIN_API_KEY,

}))
