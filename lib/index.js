import createProject from "./builder/createProject.js";
import doQuestions from "./doQuestions.js";
import parseArgs from "./parseArgs.js ";

async function cli() {
  let options = parseArgs();
  options = await doQuestions(options);
  await createProject(options);
}

export default cli;
