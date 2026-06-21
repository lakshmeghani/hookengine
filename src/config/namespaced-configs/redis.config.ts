import { registerAs } from "@nestjs/config";

export const redisConfig = registerAs('redis', () => ({
  // validation by joi ==> src/config/config.schema.ts
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
}))
