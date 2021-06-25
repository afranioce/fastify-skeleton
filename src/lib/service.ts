import { FastifyReply, FastifyRequest } from 'fastify';

export type ServiceInterface = {
  handler(request: FastifyRequest, reply: FastifyReply): void | Promise<void>;
};
