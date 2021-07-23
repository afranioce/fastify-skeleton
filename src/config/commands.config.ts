import './services.config';

import Container from 'typedi';

// Commands
import ExampleCommand from '../app/commands/example.command';

// Register commands
Container.import([ExampleCommand]);
