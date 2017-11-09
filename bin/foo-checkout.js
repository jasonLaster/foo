const { checkout } = require("../src/tasks/checkout");

const branch = process.argv[2];
if (branch) {
  checkout(branch);
}
