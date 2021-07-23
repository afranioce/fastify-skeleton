import 'reflect-metadata';
import EventEmitter from 'events';

import Container from 'typedi';

import EventManager from '../core/event-manager';
import ExampleListener from '../app/listeners/example.listener';

// Register commom non-service instance
Container.set(EventEmitter, new EventEmitter());

// Register service priorites
Container.get(EventManager);
Container.get(ExampleListener);
