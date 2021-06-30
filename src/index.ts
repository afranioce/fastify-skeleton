import { create, start } from './server';
import envConfig from './config/env.config';
import pino from 'pino';
import { resolve } from 'path';

const server = create({
  logger: pino(
    {
      level: envConfig.logLevel
    },
    pino.destination(resolve(__dirname, `var/log/${envConfig.appEnv}.log`))
  )
});

start(server);
