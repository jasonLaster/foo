const { action, error, info } = require("hankey");
const path = require("path");
const { gitCmd } = require("../utils");

function getRepoName() {
  const { repository: { url } } = require(path.join(
    process.cwd(),
    "package.json"
  ));
  const repo = path.basename(url);
  return repo.replace(/\.git$/, "");
}

function addRemote(remote) {
  const repo = getRepoName();
  info(`:running: adding remote ${remote}...`);

  const { stderr, code } = gitCmd(
    `remote add ${remote} https://github.com/${remote}/${repo}.git`
  );

  if (code != 0) {
    if (stderr.match(/remote.*already exists./)) {
      return;
    }

    error(`:bomb: ${stderr}`);
  }
}

function parseCheckout(cmd) {
  const [, remote, branch] = cmd.match(/^@(.+):(.+)$/);
  return { remote, branch };
}

function checkout(cmd) {
  const matches = cmd.match(/^@(.+)[:|\/](.+)$/);
  if (!matches) {
    return;
  }

  const [, remote, branch] = matches;
  const branchName = `${remote}-${branch}`;
  addRemote(remote);

  info(`:running: fetching ${remote}...`);
  gitCmd(`fetch ${remote}`);
  action(`:dizzy: successfully fetched ${remote}`);

  info(`:running: checking out ${remote}/${branch} to ${branchName}...`);
  const { stderr, code } = gitCmd(
    `checkout --track -b ${branchName} ${remote}/${branch}`
  );
  if (code != 0) {
    if (stderr.match(/A branch named.*already exists./)) {
      return;
    }

    error(`:bomb: ${stderr}`);
  } else {
    action(`:dizzy: checkout complete`);
    action(`:dancer: Current branch: ${branchName}`);
  }
}

module.exports = { checkout, parseCheckout };
