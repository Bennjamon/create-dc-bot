import { accessSync, constants, rmdir } from "fs";
import ncp from "ncp";
import { join } from "path";
import { promisify } from "util";

import { ERROR } from "../ui/prefixes.js";
import spinner from "../ui/spinner.js";
import generateDotenv from "./generateDotEnv.js";
import generateGitignore from "./generateGitignore.js";

const copy = promisify(ncp);

async function copyTemplate(options, dest) {
  let { template } = options;
  switch (template) {
    case "js":
      template = "javascript";
      break;
    case "ts":
      template = "typescript";
      break;
    default:
      template = template.toLowerCase();
      break;
  }
  const templatePath = join(
    import.meta.url.slice(8),
    "..",
    "..",
    "../templates",
    template
  );

  try {
    accessSync(templatePath, constants.R_OK);
  } catch (error) {
    console.log("%s Invalid template", ERROR);
    throw new Error("Invalid template");
  }

  const spin = spinner("Generating files");

  await copy(templatePath, dest).catch(() => spin.stop(false));

  await generateDotenv(options, dest);

  if (!options.skipGit) await generateGitignore(options, dest);

  spin.stop(true);
}

export default copyTemplate;
