import inquirer from "inquirer";

async function doQuestions(options) {
  const questions = [];

  if (!options.name) {
    questions.push({
      name: "name",
      message: "Enter the project's name",
      type: "input",
    });
  }

  if (!options.packageManager) {
    questions.push({
      name: "packageManager",
      message: "Wich package manager do you want use?",
      type: "list",
      choices: ["npm", "yarn"],
    });
  }

  if (!options.p) {
    questions.push({
      name: "prefix",
      message: "Choose the default prefix for commands",
      type: "input",
      validate(value) {
        return (
          (/^.*\W$/.test(value) && !/\s/.test(value) && value.length <= 5) ||
          `Invalid prefix "${value}", the prefix should not ends with a letter or number, not contains spaces and the maximun length is 5`
        );
      },
    });
  }

  const answers = await inquirer.prompt(questions);

  return {
    ...options,
    ...answers,
  };
}
export default doQuestions;
