const models = require("../models");
const { Message } = models;

module.exports = {
  Query: {
    MessagesBetween: async (_, { participantA, participantB }) =>
      Message.find({
        $or: [
          { sender: participantA, receiver: participantB },
          { sender: participantB, receiver: participantA },
        ],
      }),
  },
};
