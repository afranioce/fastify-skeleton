import { Argument } from 'commander';
import { Service } from 'typedi';

import Command from '../core/command';
import EventManager from '../core/event-manager';
import ExampleEvent from '../events/example.event';

@Service()
export default class ExampleCommand extends Command {
  protected get defaultName(): string {
    return 'pubsub:pull';
  }

  protected get defaultDescription(): string {
    return 'Subscription that will pulled.';
  }

  public constructor(private event: EventManager) {
    super();
  }

  protected configure(): void {
    this.addArgument(new Argument('<subscriptionId>', 'Subscription ID'));
  }

  protected execute(subscription: number): void {
    this.event.dispatch<ExampleEvent>('deleted', subscription);

    console.log(`The subscription ID is ${subscription}`);
  }
}
