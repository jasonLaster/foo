const shell = require("shelljs");
const pager = require("node-pager");
const debug = require("debug")("foo");

function gitCmd(command) {
  const { code, stdout, stderr } = shell.exec(`git ${command} --color=always`, {
    silent: true
  });

  // const data = debug(command, { code, stdout, stderr });
  return { code, stdout, stderr };
}

async function log() {
  const { stdout } = gitCmd("log");
  pager(stdout);
}

function diff() {
  const { stdout } = gitCmd("diff");
  console.log(stdout);
}

// log();
diff();
