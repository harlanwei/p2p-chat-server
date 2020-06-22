const _ = require("lodash");
const models = require("../models");
const { User } = models;

module.exports = {
  Query: {
    MessagesBetween: async ($0, { participantA, participantB }) => {
      const target = await User.find({ username: participantA });
      if (_.isEmpty(target)) return null;
      return target[0].messages.filter(
        (m) => m.sender === participantB || m.receiver === participantB
      );
    },
  },

  Mutation: {
    SaveMessages: async ($0, { initiator, messages }) => {
      const target = await User.find({ username: initiator });
      if (_.isEmpty(target)) return null;
      const user = target[0];
      user.messages = messages;
      try {
        await user.save();
        return "yes";
      } catch (e) {
        console.error(e);
        return "no";
      }
    },
  },
};
