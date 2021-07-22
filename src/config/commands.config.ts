import './services.config';

import Container from 'typedi';

// Commands
import ExampleCommand from '../commands/example.command';

// Register commands
Container.import([ExampleCommand]);
