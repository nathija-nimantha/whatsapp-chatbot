import dotenv from 'dotenv';

dotenv.config();

export const appConfig = {
    port: process.env.PORT || 3000,
    APP_ENV: process.env.APP_ENV || 'dev',
    APP_HOST: process.env.APP_HOST || 'localhost',
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'null',
    OPENAI_MODEL: process.env.OPENAI_MODEL || 'gpt-4o-mini',
}
