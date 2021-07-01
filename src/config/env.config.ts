import { config } from 'dotenv';
import { LogLevel } from 'fastify';

config();

type AppEnviroment = 'dev' | 'prod' | 'test';

export interface EnvConfig {
  readonly nodeEnv: string;
  readonly appEnv: AppEnviroment;
  readonly appHost: string;
  readonly appPort: number;
  readonly logLevel: LogLevel;
}

const envConfig: EnvConfig = {
  nodeEnv: <string>process.env.NODE_ENV,
  appEnv: <AppEnviroment>process.env.ENVIRONMENT,
  appHost: <string>process.env.HOST,
  appPort: parseInt(<string>process.env.PORT),
  logLevel: <LogLevel>process.env.LOG_LEVEL || 'info',
};

export default envConfig;

export const NODE_ENV_DEVELOPMENT = 'development';
export const NODE_ENV_PRODUCTION = 'production';

export const APP_ENV_DEVELOPMENT = 'dev';
export const APP_ENV_PRODUCTION = 'prod';
