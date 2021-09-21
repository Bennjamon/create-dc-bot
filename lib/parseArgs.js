import arg from "arg";

function parseArgs() {
  const options = arg(
    {
      "--skip-git": Boolean,
      "--skip-install": Boolean,
      "--template": String,
      "--package-manager": String,
      "--prefix": String,
    },
    {
      argv: process.argv.slice(2),
    }
  );
  return {
    skipGit: options["--skip-git"] || false,
    skipInstall: options["--skip-install"] || false,
    template: options["--template"] || "javascript",
    packageManager: options["--package-manager"],
    prefix: options["--prefix"],
    name: options._.join(" "),
  };
}

export default parseArgs;
