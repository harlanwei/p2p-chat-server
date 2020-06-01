const fs = require("fs");

exports.requireAllUnder = (dir, exceptFileWithoutExtension) => {
  const targets = fs
    .readdirSync(dir)
    .filter((el) => el.endsWith("js"))
    .map((el) => /(.*).js/.exec(el)[1])
    .filter((el) => el !== exceptFileWithoutExtension);
  return targets.map((target) => require(`./${dir}/${target}`));
};

exports.spread = (arr) =>
  arr.reduce((prev, curr) => Object.assign(prev, curr), {});
