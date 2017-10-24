const pager = require("node-pager");

const { gitCmd } = require("./src/utils");
const { checkout } = require("./src/tasks");

async function log() {
  const { stdout } = gitCmd("log  --color=always");
  pager(stdout);
}

function diff() {
  const { stdout } = gitCmd("diff  --color=always");
  console.log(stdout);
}

// log();
// diff();

checkout("@bomsy:dummy");
// checkout("@Fischer-L/4369-incorrect-line-out-of-scope");
// checkout("4381");
