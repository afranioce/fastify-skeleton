import './config/services.config';

import { Command } from 'commander';
import Container from 'typedi';

import ExampleCommand from './commands/example.command';

const program = new Command();

const commands: Command[] = [Container.get(ExampleCommand)];

commands.map((command) => program.addCommand(command));

program.parseAsync();
