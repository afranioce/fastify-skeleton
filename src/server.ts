import { resolve } from 'path';

import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import { bootstrap } from 'fastify-decorators';

export function create(opts: FastifyServerOptions = {}): FastifyInstance {
  const server: FastifyInstance = fastify(opts);

  server.register(bootstrap, {
    directory: resolve(__dirname, 'handlers'),
    mask: /\.handler\./,
  });

  return server;
}

export async function start(server: FastifyInstance) {
  await server.ready();

  return await new Promise<FastifyInstance>((resolve) => {
    server.listen(
      { port: parseInt(process.env.PORT as string), host: process.env.HOST },
      (err: Error, address: string): void => {
        if (err) {
          server.log.fatal({ msg: `Application startup error`, err, address });
          process.exit(1);
        }

        resolve(server);
      }
    );
  });
}
