import './config/services.config';

import { Server } from './core';

const server = new Server();

server.addHandlers();

server.start();
