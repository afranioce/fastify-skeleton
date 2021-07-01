import { resolve } from 'path';

import fastify, { FastifyError, FastifyInstance, FastifyServerOptions } from 'fastify';
import { bootstrap } from 'fastify-decorators';

import envConfig from './config/env.config';

export default class Server {
  public readonly fastify: FastifyInstance;

  public constructor(private opts: FastifyServerOptions = {}) {
    this.fastify = fastify(this.opts);
  }

  public addHandlers(): void {
    this.fastify.register(bootstrap, {
      directory: resolve(__dirname, 'handlers'),
      mask: /\.handler\./,
    });
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
