import { FastifyReply, FastifyRequest } from 'fastify';
import { Service } from 'typedi';

import { ServiceInterface } from '../../lib/service';

@Service()
export class GetAllService implements ServiceInterface {
  async handler(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
    reply.send([{ id: 123456 }]);
  }
}
