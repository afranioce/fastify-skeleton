import './config/commands.config';

import { Command } from 'commander';
import Container from 'typedi';

import { commandToken } from './core';

const program = new Command();
const commands = Container.getMany(commandToken);

commands.map((command) => program.addCommand(command));

program.parseAsync();
