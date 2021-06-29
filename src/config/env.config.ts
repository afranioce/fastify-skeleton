import { config } from 'dotenv';

/**
 * @TODO improve lazy configuration loading
 */
if (process.env.NODE_ENV === undefined) {
  config();
}

interface EnvConfig {
  nodeEnv: string,
  appEnv: string,
  appHost: string,
  appPort: number,
}

const envConfig: EnvConfig = {
  nodeEnv: <string>process.env.NODE_ENV,
  appEnv: <string>process.env.ENVIRONMENT,
  appHost: <string>process.env.HOST,
  appPort: parseInt(<string>process.env.PORT),
};

export default envConfig;

export const NODE_ENV_DEVELOPMENT = 'development';
export const NODE_ENV_PRODUCTION = 'production';

export const APP_ENV_DEVELOPMENT = 'dev';
export const APP_ENV_PRODUCTION = 'prod';
