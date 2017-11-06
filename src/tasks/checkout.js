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
  addRemote(remote);

  info(`:running: fetching ${remote}...`);
  gitCmd(`fetch ${remote}`);
  action(`:dizzy: successfully fetched ${remote}`);

  info(`:running: checking out ${remote}/${branch}...`);
  const { stderr, code } = gitCmd(`checkout --track ${remote}/${branch}`);
  if (code != 0) {
    error(`:bomb: ${stderr}`);
  }

  action(`:dancer: Current branch: ${branch}`);
}

module.exports = { checkout, parseCheckout };
