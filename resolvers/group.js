const { Group } = require("../models");
const _ = require("lodash");

async function findAndModifyGroup(groupId, callback) {
  const target = await Group.find({ id: groupId });
  if (_.isEmpty(target)) return null;
  return callback(target[0]);
}

module.exports = {
  Query: {
    RetrieveGroupInfo: async ($0, { id }) => {
      return await Group.find({ id });
    },
  },

  Mutation: {
    RemoveGroupMembers: async ($0, { groupId, memberUsernames }) => {
      return findAndModifyGroup(groupId, async (group) => {
        group.members = group.members.filter(
          (el) => !memberUsernames.includes[el]
        );
        await group.save();
        return group;
      });
    },

    AddGroupMembers: async ($0, { groupId, memberUsernames }) => {
      return findAndModifyGroup(groupId, async (group) => {
        group.members.push(...memberUsernames);
        await group.save();
        return group;
      });
    },
  },
};
