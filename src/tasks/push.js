const { action } = require("hankey");
const { gitCmd } = require("../utils");

function getRemote() {
  const { stdout } = gitCmd(`branch -vv`);

  // check for a remote/branch pair
  const matches = stdout.match(/\*.*\[(\S+)\].*/);

  if (!matches) {
    const [, branch] = gitCmd(`branch`).stdout.match(/\* (\S+).*/);
    return { remote: null, branch };
  }

  const [remote, branch] = remoteBranch.split("/");
  return { remote, branch };
}

function push() {
  const { remote, branch } = getRemote();

  if (remote) {
    gitCmd(`push --no-verify -f ${remote} ${branch} `);
    action(`:dizzy: successfully pushed to ${remote}/${branch}`);
    return;
  }

  gitCmd(`push --no-verify -f me ${branch} `);
  action(`:dizzy: successfully pushed to ${branch}`);
}

module.exports = { getRemote, push };
