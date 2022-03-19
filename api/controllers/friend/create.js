module.exports = {
  friendlyName: "Create",

  description: "Create friend.",

  inputs: {
    name: {
      type: "string",
    },
    cardInfo: {
      type: "string",
    },
  },

  exits: {
    succes: {
      statusCode: 201,
      description: "user was created in the database",
    },
  },

  fn: async function ({ name, cardInfo }, exits) {
    const newFriend = { name, cardInfo };
    await Friend.create(newFriend);
    return exits.succes(newFriend);
  },
};
