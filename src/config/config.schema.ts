import Joi from "joi";

export const configSchema = Joi.object({
  NODE_ENV: Joi.string()
  .valid('development', 'production', 'test')
  .default('development'),
  APP_PORT: Joi.number().default(3000),
  ADMIN_API_KEY: Joi.string().required(),

  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),

  DB_SYNC: Joi.boolean().when(Joi.ref('NODE_ENV'), {
    is: 'development',
    then: Joi.valid(true).required(),
    otherwise: Joi.valid(false).required(),
  }),

  REDIS_PORT: Joi.number().default(6379),
  REDIS_HOST: Joi.string().required(),
})
