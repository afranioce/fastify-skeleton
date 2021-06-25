import { FastifyReply, FastifyRequest } from "fastify";

export interface ServiceInterface {
  handler(request: FastifyRequest, reply: FastifyReply): void | Promise<void>;
}
