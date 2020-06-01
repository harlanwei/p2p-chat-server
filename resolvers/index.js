const _ = require("lodash");
const utils = require("../utils");
const resolvers = utils.requireAllUnder("resolvers", "index");

module.exports = {
  Query: utils.spread(resolvers.map((el) => el.Query)),
  Mutation: utils.spread(resolvers.map((el) => el.Mutation)),
};
