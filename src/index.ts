import { create, start } from './server';

const server = create({ logger: true });

start(server);
