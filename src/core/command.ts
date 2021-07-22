import { Command as Base } from 'commander';
import { Token } from 'typedi';

export const commandToken = new Token<Base>('commands');

export default abstract class Command extends Base {
  protected get defaultName(): string {
    return '';
  }

  protected get defaultDescription(): string {
    return '';
  }

  public constructor() {
    super();

    this.name(this.defaultName).description(this.defaultDescription);

    this.configure();

    this.action((...args: unknown[]) => this.execute(args));
  }

  protected abstract configure(): void;

  protected abstract execute(...args: unknown[]): void;
}
