# Create-dc-bot

A command to start projects for discord bots with [discord.js](https://discord.js.org/)

## Instalation

```
npm install -g create-dc-bot
```

## Usage

```
create-dc-bot [name] [options]
```

## Options

`[name]` The name of the project
`--template` The template to create the project, the possibles values are `typescript`, `javacript`, `js` or `ts`, the default is `javacript`
`--package-manager <name>` The package manager to install the dependencies, the possibles values are `npm` or `yarn`
`--skip-git` With this flag you can skip the initialization of the git project
`--skip-installaion` With this flag you can skip the installation of dependendencies

## Project structure

These are the project structures of both templates.
**Note** the file `.gitignore` wont be generated if `--skip-git` is used.

### TypeScript

```
.
│───.env
│───.gitignore
│───package.json
│───tsconfig.json
├───@types
│   └───Command.d.ts
│
└───src
    │───index.ts
    │
    ├───commands
    │   ├───help.ts
    │   └───ping.ts
    │
    └───utils
        └───getPrefix.ts

```

### JavaScript

```
.
├───.env
├───.gitignore
├───index.js
├───package.json
│
├───commands
│   ├───help.js
│   └───ping.js
│
└───utils
    └───getPrefix.js
```
