const { gitCmd } = require("../utils");
const { action, error, info } = require("hankey");

const inquirer = require("inquirer");

function getBranches() {
  const resp = gitCmd(`branch --list`);
  return resp.stdout
    .split("\n")
    .map(line => line.replace(/\*/, "").trim())
    .filter(i => i);
}

async function branchesDelete(config) {
  const branches = getBranches();

  const response = await inquirer.prompt([
    {
      type: "checkbox",
      message: "Select branches",
      name: "branches",
      choices: [...branches.map(branch => ({ name: branch }))]
    }
  ]);

  const deadBranches = response.branches;
  const out = gitCmd(`branch -D ${deadBranches.join(" ")}`);

  out.stdout
    .trim()
    .split("\n")
    .forEach(line => action(`:gun: ${line}`));
}

module.exports = branchesDelete;
