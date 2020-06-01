const _ = require("lodash");
const { User } = require("../models");

module.exports = {
  Query: {
    Login: async ($0, { username, password }) => {
      const targets = await User.find({ username }).exec();
      return !_.isEmpty(targets) && targets[0].password === password
        ? targets[0]
        : null;
    },
  },

  Mutation: {
    Register: async ($0, { username, password, nickname }) => {
      const possibleConflicts = await User.find({ username }).exec();
      if (!_.isEmpty(possibleConflicts)) return null;
      const constructedItem = {
        ...arguments[1],
        avatar: "",
      };
      try {
        await new User(constructedItem).save();
        return constructedItem;
      } catch (err) {
        console.error(err);
        return null;
      }
    },

    ChangeNickname: async ($0, { username, nickname }) => {
      /* TODO */
    },
  },
};
