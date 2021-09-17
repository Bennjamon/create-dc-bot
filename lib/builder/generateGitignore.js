import ncp from "ncp";
import { join } from "path";
import { promisify } from "util";

const copy = promisify(ncp);

async function generateGitignore(options, projectPath) {
  const { template } = options;
  const templatePath = join(
    import.meta.url.slice(8),
    "..",
    "..",
    "..",
    "templates",
    `${template}.gitignore`
  );
  await copy(templatePath, join(projectPath, ".gitignore"));
}
export default generateGitignore;
