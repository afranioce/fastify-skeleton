import 'reflect-metadata';
import dotenv from 'dotenv';

import { create, start } from './server';

dotenv.config();

const server = create();

start(server);
