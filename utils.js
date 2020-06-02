const fs = require("fs");

/**
 * Import all JavaScript modules under one directory. Most oftenly used by the `index.js` file
 * under each directory to import all related sub-modules.
 *
 * @param {{ except?: Boolean }} options
 */
exports.requireAllUnder = (dir, options) => {
  let targets = fs
    .readdirSync(dir)
    .filter((el) => el.endsWith("js"))
    .map((el) => /(.*).js/.exec(el)[1]);
  if (options.except) targets = targets.filter((el) => el !== options.except);
  return targets.map((target) => require(`./${dir}/${target}`));
};

exports.spread = (arr) =>
  arr.reduce((prev, curr) => Object.assign(prev, curr), {});
