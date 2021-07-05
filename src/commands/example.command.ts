import { Argument } from 'commander';
import { Service } from 'fastify-decorators';

import { Command } from '../core/command';

@Service()
export default class ExampleCommand extends Command {
  protected get defaultName(): string {
    return 'pubsub:pull';
  }

  protected get defaultDescription(): string {
    return 'Subscription that will pulled.';
  }

  protected configure(): void {
    this.addArgument(new Argument('<subscriptionId>', 'Subscription ID'));
  }

  protected execute(subscription: number): void {
    console.log(`The subscription ID is ${subscription}`);
  }
}
