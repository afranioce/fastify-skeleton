import { config } from 'dotenv';

import { create, start } from './server';

config();

const server = create({ logger: true });

start(server);
