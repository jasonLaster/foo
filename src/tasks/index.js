const { checkout } = require("./checkout");
const { push } = require("./push");
const log = require("./log");
const diff = require("./diff");
const branchesDelete = require("./branches-delete");

module.exports = {
  checkout,
  push,
  log,
  diff,
  "branches-delete": branchesDelete
};
