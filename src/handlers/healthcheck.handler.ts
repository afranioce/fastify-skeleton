import { GET, RequestHandler } from 'fastify-decorators';

@GET({
  url: '/_healthcheck',
})
export default class HealthcheckHandler extends RequestHandler {
  async handle(): Promise<void> {
    this.reply.send('OK');
  }
}
