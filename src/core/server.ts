import { resolve } from 'path';

import fastify, { FastifyError, FastifyInstance, FastifyServerOptions } from 'fastify';
import { bootstrap } from 'fastify-decorators';
import pino from 'pino';
import { v4 as uuid } from 'uuid';

import envConfig from '../config/env.config';

export default class Server {
  private static readonly LOG_FILE: string = `/var/log/app/${envConfig.appEnv}.log`;

  public readonly fastify: FastifyInstance;

  private readonly defaultOptions: FastifyServerOptions = {
    genReqId: () => uuid(),
    logger: pino(
      {
        level: envConfig.logLevel,
      },
      pino.destination(Server.LOG_FILE)
    ),
  };

  public constructor(options: FastifyServerOptions = {}) {
    this.fastify = fastify({ ...this.defaultOptions, ...options });
  }

  public addHandlers(): Server {
    this.fastify.register(bootstrap, {
      directory: resolve(__dirname, 'handlers'),
      mask: /\.handler\./,
    });

    return this;
  }

  public async start(): Promise<void> {
    await this.fastify.ready();

    const opts = {
      host: envConfig.appHost,
      port: envConfig.appPort,
    };

    this.fastify.listen(opts).catch(this.handlerError);
  }

  private handlerError(err: FastifyError): void {
    this.fastify.log.fatal({ msg: 'Application startup error', err });
    process.exit(1);
  }
}
