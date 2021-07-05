import { Command } from 'commander';
import { getInstanceByToken } from 'fastify-decorators';

import ExampleCommand from './commands/example.command';

const program = new Command();

//TODO register commands automatically
program.addCommand(getInstanceByToken<ExampleCommand>(ExampleCommand));

program.parseAsync();
