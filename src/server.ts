import path from 'path';

import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import fastifyAutoload from 'fastify-autoload';

export function create(opts: FastifyServerOptions = {}): FastifyInstance {
  const server: FastifyInstance = fastify({});

  server.register(fastifyAutoload, {
    dir: path.join(__dirname, 'routes'),
    options: opts,
  });

  return server;
}

export async function start(server: FastifyInstance) {
  await server.ready();

  return await new Promise<FastifyInstance>((resolve) => {
    server.listen(
      { port: parseInt(process.env.PORT!), host: process.env.HOST },
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
