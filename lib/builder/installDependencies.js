import { spawn } from "child_process";

import { ERROR } from "../ui/prefixes.js";
import spinner from "../ui/spinner.js";
import { npm, yarn } from "./packageManagers.js";

function installDependencies(options, projectPath) {
  const packageManager = options.packageManager.toLowerCase();
  return new Promise((resolve, reject) => {
    let command;

    switch (packageManager) {
      case "npm":
        command = npm;
        break;

      case "yarn":
        command = yarn;
        break;

      default:
        console.log("%s Invalid package manager", ERROR);
        reject("Invalid package manager");
        break;
    }

    const options = {
      cwd: projectPath,
      shell: true,
    };

    const spin = spinner("Installing dependencies");

    const spawned = spawn(command.executable, command.args, options);

    spawned.on("close", (code) => {
      if (code !== 0) {
        const fullCommand = `${command.executable} ${command.args.join(" ")}`;
        spin.stop(false, `An error was occurred executing ${fullCommand}`);
        reject("Error installing dependencies");
      } else {
        spin.stop();
        resolve(null);
      }
    });
  });
}
export default installDependencies;
