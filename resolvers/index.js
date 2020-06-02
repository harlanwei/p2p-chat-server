const _ = require("lodash");
const utils = require("../utils");
const resolvers = utils.requireAllUnder("resolvers", { except: "index" });

module.exports = {
  Query: utils.spread(resolvers.map((el) => el.Query)),
  Mutation: utils.spread(resolvers.map((el) => el.Mutation)),
};
