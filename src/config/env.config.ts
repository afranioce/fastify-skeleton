import { config } from 'dotenv';
import { LogLevel } from 'fastify';

config();

export enum AppEnv {
  Dev = 'dev',
  Prod = 'prod',
  Test = 'test',
}

export enum NodeEnv {
  Development = 'development',
  Production = 'production',
}

type AppEnvType = keyof typeof AppEnv;

export interface EnvConfig {
  readonly nodeEnv: string;
  readonly appEnv: AppEnvType;
  readonly appHost: string;
  readonly appPort: number;
  readonly logLevel: LogLevel;
}

const envConfig: EnvConfig = {
  nodeEnv: <string>process.env.NODE_ENV || NodeEnv.Production,
  appEnv: <AppEnvType>process.env.ENVIRONMENT || AppEnv.Prod,
  appHost: <string>process.env.HOST || '0.0.0.0',
  appPort: parseInt(<string>process.env.PORT) || 4444,
  logLevel: <LogLevel>process.env.LOG_LEVEL || 'info',
};

export default envConfig;
