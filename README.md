# Create-dc-bot

A command to start projects for discord bots with [discord.js](https://discord.js.org/)

## Installation

```
npm install -g create-dc-bot
```

## Usage

```
create-dc-bot [name] [options]
```

## Options

- `[name]` The name of the project
- `--prefix <prefix>` The default prefix for the commands
- `--template <name>` The template to create the project `[javacript (default) | typescript | js | ts]`
- `--package-manager <name>` The package manager to install the dependencie `[npm | yarn]`
- `--skip-git` With this flag you can skip the initialization of the git project
- `--skip-installaion` With this flag you can skip the installation of dependendencies

## Project structures

There are the important folders generated.

**Note** in Typescript, this folders will be generated in the `src/` folder

`commands`: In this folder every added file will be automatically added as a command. **Note** - every file must have an declared function named "run" that will receives two parameters, (I) message object and (II) args.

`utils` In this folder you can add the methods used in any part of your project
