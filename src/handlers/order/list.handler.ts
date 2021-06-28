import { GET, RequestHandler } from 'fastify-decorators';

@GET({
  url: '/orders',
})
export default class ListHandler extends RequestHandler {
  async handle(): Promise<unknown> {
    return { msg: 'A example' };
  }
}
