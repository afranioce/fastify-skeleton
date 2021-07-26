import 'reflect-metadata';
import EventEmitter from 'events';

import Container from 'typedi';

import ExampleListener from '../app/listeners/example.listener';
import { EventManager } from '../core';

// Register commom non-service instance
Container.set(EventEmitter, new EventEmitter());

// Register service priorites
Container.get(EventManager);
Container.get(ExampleListener);
