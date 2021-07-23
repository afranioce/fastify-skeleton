import { GET, RequestHandler } from 'fastify-decorators';

@GET({
  url: '/',
})
export default class ManifestHandler extends RequestHandler {
  public async handle(): Promise<void> {
    this.reply.send({ timestamp: new Date().toISOString() });
  }
}
