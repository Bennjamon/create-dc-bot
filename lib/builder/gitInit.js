import { spawn } from "child_process";

import spinner from "../ui/spinner.js";

function gitInit(projectPath) {
  return new Promise((resolve, reject) => {
    const command = "git";
    const args = ["init"];
    const options = {
      cwd: projectPath,
    };
    const spin = spinner("Initiating git project");

    const spawned = spawn(command, args, options);

    spawned.on("close", (code) => {
      if (code !== 0) {
        spin.stop(false, "An error was occurred executing git init");
        reject("Error initialiting git");
      } else {
        spin.stop();
        resolve();
      }
    });
  });
}
export default gitInit;
