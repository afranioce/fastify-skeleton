import { resolve } from 'path';

import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import { bootstrap } from 'fastify-decorators';

import envConfig from './config/env.config';

export function create(opts: FastifyServerOptions = {}): FastifyInstance {
  const server: FastifyInstance = fastify(opts);

  server.register(bootstrap, {
    directory: resolve(__dirname, 'handlers'),
    mask: /\.handler\./,
  });

  return server;
}

export async function start(server: FastifyInstance): Promise<FastifyInstance> {
  await server.ready();

  return await new Promise<FastifyInstance>((resolve) => {
    server.listen(
      {
        host: envConfig.appHost,
        port: envConfig.appPort,
      },
      (err: Error, address: string): void => {
        if (err) {
          server.log.fatal({ msg: 'Application startup error', err, address });

          process.exit(2);
        }

        resolve(server);
      }
    );
  });
}
