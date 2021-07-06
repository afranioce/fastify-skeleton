import EventEmitter from 'events';

import Container, { Service } from 'typedi';

declare type EventSignature<L> = {
  [E in keyof L]: (...args: any[]) => any;
};

declare type EventDefault = {
  [k: string]: (...args: any[]) => any;
};

export interface EventListener {

}

@Service({ global: true })
export default class EventManager {
  public constructor(private emitter: EventEmitter) {
    Container.getMany('event.lintener');
  }

  public dispatch<T extends EventSignature<T> = EventDefault>(
    event: keyof T,
    ...args: Parameters<T[keyof T]>
  ): boolean {
    return this.emitter.emit(<string>event, ...args);
  }
}
