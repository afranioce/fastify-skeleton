import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { FastifyInstance, InjectOptions, LightMyRequestResponse } from 'fastify';
import Server from '../../src/core/server';

export class ApiWorld extends World {
  private readonly fastify: FastifyInstance;

  public opts: InjectOptions = {};

  public response?: LightMyRequestResponse = undefined;

  public constructor(opts: IWorldOptions) {
    super(opts);

    this.fastify = new Server().addHandlers().fastify;
  }

  public async inject(opts?: InjectOptions): Promise<void> {
    this.response = await this.fastify.inject({ ...this.opts, ...opts });

    return;
  }
}

setWorldConstructor(ApiWorld);
