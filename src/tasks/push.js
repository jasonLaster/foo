const { action } = require("hankey");
const { gitCmd } = require("../utils");

/*
 *  handles both cases w/ the : and and w/o
 * license               b12187b [khal0988/license] added license header to all files in src/workers
 * flow_0.57.3           e306387 [arthur801031/flow_0.57.3: ahead 11, behind 4] Upgrade flow
*/
function getRemote() {
  const { stdout } = gitCmd(`branch -vv`);

  // check for a remote/branch pair
  const matches = stdout.match(/\*.*\[(\S+)(\]|:).*/);

  if (!matches) {
    const [, branch] = gitCmd(`branch`).stdout.match(/\* (\S+).*/);
    return { remote: null, branch };
  }

  const [, remoteBranch] = matches;
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
