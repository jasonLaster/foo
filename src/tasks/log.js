const pager = require("node-pager");

async function log() {
  const { stdout } = gitCmd("log  --color=always");
  pager(stdout);
}

module.exports = log;
