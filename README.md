# Fastify API skeleton

A simple api skeleton using fastify with TypeScript Support, for Node.js.

## Core features

* **Docker Support**: Docker is guaranteed to be identical on any system
* **Highly performant**: Fastify is one of the fastest web frameworks
* **Logging**: Fastify has a integration with best logger to almost remove this cost, [Pino](https://github.com/pinojs/pino)!
* **TypeScript ready**: We work with type declaration, object oriented with classes, interfaces and statically typed like C# or Java
* **Coding Standards**: Help you to maintaince a clean code and to find and fix problems in your code

## Pre-requisites

- git
- docker
- docker-compose

## Misc.

We must pass our commands to the Docker container. This is a really long command:

`docker-compose -f docker-compose.cli.yml run --rm yarn install`

For this reason, it is recommended to create an alias for `docker-compose -f docker-compose.cli.yml run --rm` and call it `dcli` (Docker CLI).

> add a new line into your shell `alias dcli='docker-compose -f docker-compose.cli.yml run --rm'`

> Ps.: [Oh My Zsh](https://ohmyz.sh) is a powerfull shell framework which features major extensions such as plug-ins and themes for `zsh` (recomended)

## [Recommended] Enable Git hooks

It goes to help you to improve your commits and reviews ([PR](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)/[MR](https://docs.gitlab.com/ee/user/project/merge_requests/)) like coding standards, unit tests and more.

Install [nodejs](https://nodejs.org/en/download/) >= 10:

```
curl -sL install-node.now.sh/lts | bash
```

Install husky:

```
npx husky install
```

## Quick start

Clone this repository:

Inside the project execute the following instructions:

```bash
cp .env.dist .env && cp docker-compose.override.yml.dist docker-compose.override.yml
```

```bash
docker-compose pull
```

Install composer dependencies:

```bash
dcli yarn install
```

Launch the containers with:

```bash
docker-compose exec -d
```

Finally, you can test it with:

```
curl http://127.0.0.1:4444
```

## [Optional] Setup gitlab token

The first step is to make a gitlab token with following permissions:

1. Go to [Gitlab personal access tokens](https://gitlab.com/profile/personal_access_tokens)
2. Create a new token.
3. Assign the permissions.
4. Click on `Create personal access token`.

Second step is to save gitlab token into `.bashrc` or `.env` (see the [Quick Start](#quick-start) section):

```bash
nano ~/.bashrc
```

add it in the end:

```bash
export GITLAB_TOKEN=YOUR_TOKEN
```

finally reload bashrc

```bash
source ~/.bashrc
```

> If you have installed the [zsh](https://www.zsh.org/), save your token into `.zshrc`.

## Tests

yarn tests:

```bash
dcli yarn run test
```

Lint files:

```bash
dcli yarn run fix
```

## Console Commands

List commands:

```bash
dcli yarn run dev:cli
```

Command help:

```bash
dcli yarn run dev:cli example -h
```

To register a command, change `src/command.ts`:

```
import NewExampleCommand from 'src/commands/new-example.command';

const commands: Command = [
  // ...
  Container.get(NewExampleCommand),
]
```

See the to more examples https://github.com/tj/commander.js

> [Fastify-decorator](https://github.com/L2jLiga/fastify-decorators) has support to Dependency injection (DI), [click here](https://github.com/L2jLiga/fastify-decorators/blob/v3/docs/Services%20and%20dependency%20injection.md) to see more exampĺes
