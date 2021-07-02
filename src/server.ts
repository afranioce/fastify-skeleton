import { resolve } from 'path';

import fastify, { FastifyError, FastifyInstance, FastifyServerOptions } from 'fastify';
import { bootstrap } from 'fastify-decorators';
import pino from 'pino';

import envConfig from './config/env.config';

export default class Server {
  public readonly fastify: FastifyInstance;

  public constructor(options?: FastifyServerOptions) {
    if (!options) {
      options = {
        logger: pino(
          {
            level: envConfig.logLevel,
          },
          pino.destination(resolve(__dirname, `var/log/${envConfig.appEnv}.log`))
        ),
      };
    }

    this.fastify = fastify(options);
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
