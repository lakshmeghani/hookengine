import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule as NestConfigModule } from '@nestjs/config';
import { databaseConfig } from './namespaced-configs/database.config';
import { redisConfig } from './namespaced-configs/redis.config';
import { secretsConfig } from './namespaced-configs/secrets.config';
import { configSchema } from './config.schema';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [
        databaseConfig,
        redisConfig,
        secretsConfig,
      ],
      validationSchema: configSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      }
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        ...configService.get<TypeOrmModuleAsyncOptions>('database'),
        autoLoadEntities: true,
        synchronize: configService.get('DB_SYNC'),
      })
    }),
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        connection: {
          ...configService.get('redis'),
        } 
      }),
    })
  ],
})
export class ConfigModule  {}
