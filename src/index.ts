import { resolve } from 'path';

import { FastifyServerOptions } from 'fastify';
import pino from 'pino';

import envConfig from './config/env.config';
import Server from './server';

const opts: FastifyServerOptions = {
  logger: pino(
    {
      level: envConfig.logLevel,
    },
    pino.destination(resolve(__dirname, `var/log/${envConfig.appEnv}.log`))
  ),
};

const server = new Server(opts);

server.addHandlers();

server.start();

export default server;
