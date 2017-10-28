const tasks = require("./src/tasks");
module.exports = function(opts) {
  tasks[opts.args[0]](opts.args[1]);
};
//checkout("@bomsy:dummy");
// checkout("@Fischer-L/4369-incorrect-line-out-of-scope");
// checkout("4381");
