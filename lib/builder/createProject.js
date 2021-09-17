import chalk from "chalk";
import { existsSync, mkdir, rm } from "fs";
import { join } from "path";
import { promisify } from "util";

import { ERROR } from "../ui/prefixes.js";

import copyTemplate from "./copyTemplate.js";
import gitInit from "./gitInit.js";
import installDependencies from "./installDependencies.js";

const makedir = promisify(mkdir);
const del = promisify(rm);

async function createProject(options) {
  const projectPath = join(process.cwd(), options.name);
  try {
    if (existsSync(projectPath)) {
      console.log("%s dir %s already exists", ERROR, projectPath);
      process.exit(1);
    }

    await makedir(projectPath);

    await copyTemplate(options, projectPath);

    if (!options.skipInstall) {
      await installDependencies(options, projectPath);
    }

    if (!options.skipGit) {
      await gitInit(projectPath);
    }

    console.log(
      chalk.cyan(
        `Project ready

Run:
  cd ${options.name}
  npm run dev

Tips:
- Set the token of your bot in ${join(projectPath, ".env")}
- Add commands in ${
          options.template == "typescript"
            ? join(projectPath, "src", "commands")
            : join(projectPath, "commands")
        }

Happy Hacking!`
      )
    );
  } catch (error) {
    console.log("Removing generated files...");
    try {
      await del(projectPath, { recursive: true, force: true });
    } catch (error) {}
    process.exit(1);
  }
}

export default createProject;
