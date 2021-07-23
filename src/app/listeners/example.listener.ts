import EventEmitter from 'events';

import { Service } from 'typedi';

@Service()
export default class ExampleListener {
  public constructor(emitter: EventEmitter) {
    emitter.on('added', this.onAdd);
    emitter.on('deleted', this.onDelete);
  }

  private onAdd(args: unknown[]): void {
    console.log('added event args', args);
  }

  private onDelete(args: unknown[]): void {
    console.log('deleted event deleteCount', args[0]);
  }
}
