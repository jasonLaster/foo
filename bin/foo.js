#!/usr/bin/env node

const main = require("../index");
const program = require("commander");
const pkg = require("../package.json");

program.version(pkg.version);

program.usage("[command] [arg]");

program
  .command("checkout <arg>")
  .alias("co")
  .description("Gets a remote branch.");

program.command("log").description("Shows the commit logs.");

program
  .command("diff")
  .description("Shows changes between commits, commit and working tree, etc");

program
  .command("push")
  .description("Pushes your local branch to GH, regardless of remote.");

program.parse(process.argv);

if (!program.args.length) {
  program.help();
  process.exit(1);
}

main(program);
