const _ = require("lodash");
const { User } = require("../models");

module.exports = {
  Query: {
    Login: async ($0, { username, password }) => {
      const targets = await User.find({ username }).exec();
      if (_.isEmpty(targets) || targets[0].password !== password) return null;
      const user = targets[0];
      delete user.message;
      return user;
    },
  },

  Mutation: {
    Register: async ($0, { username, password }) => {
      const possibleConflicts = await User.find({ username }).exec();
      if (!_.isEmpty(possibleConflicts)) return null;
      const constructedItem = {
        ...arguments[1],
        avatar: 0,
        message: [],
      };
      try {
        await new User(constructedItem).save();
        return constructedItem;
      } catch (err) {
        console.error(err);
        return null;
      }
    },

    ChangeAvatar: async ($0, { username, avatarId }) => {
      const target = await User.find({ username }).exec();
      if (_.isEmpty(target)) return null;
      const user = target[0];
      user.avatar = avatarId;
      await user.save();
      delete user.message;
      return user;
    },
  },
};
