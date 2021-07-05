import { Command as Base } from "commander";

export abstract class Command extends Base {
  protected get defaultName() : string {
    return '';
  }

  protected get defaultDescription(): string {
    return '';
  };

  constructor() {
    super();

    this
      .name(this.defaultName)
      .description(this.defaultDescription);

    this.configure();

    this.action((...args: any[]) => this.execute(args));
  }

  protected abstract configure(): void;

  protected abstract execute(...args: any[]): void;
}
