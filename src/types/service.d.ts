import { FastifyReply, FastifyRequest } from "fastify";

// TODO this not work, why? When solve this, remove ../lib/service.ts
declare module 'fastify-service' {
  export interface ServiceInterface {
    handler(request: FastifyRequest, reply: FastifyReply): void | Promise<void>;
  }
}
