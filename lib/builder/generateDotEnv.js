import { readFile, writeFile } from "fs";
import { join } from "path";
import { promisify } from "util";

const read = promisify(readFile);
const write = promisify(writeFile);

async function generateDotenv(options, projectPath) {
  const dotenvPath = join(
    import.meta.url.slice(8),
    "..",
    "..",
    "../templates",
    ".env"
  );
  const dotenv = await read(dotenvPath, "utf-8");

  const parsed = dotenv.replace(
    /<[^>]+>/g,
    (str) =>
      options[str.slice(1, -1).toLowerCase()] || str.slice(1, -1).toLowerCase()
  );

  const outputPath = join(projectPath, ".env");

  await write(outputPath, parsed);
}
export default generateDotenv;
