module.exports = {
  friendlyName: "Read",

  description: "Read friend.",

  inputs: {},

  exits: {
    success: {
      statusCode: 200,
      description: "th data was found",
    },
  },

  fn: async function (inputs, exits) {
    const data = await Friend.find();

    return exits.success({ status: true, message: "the user was found", data });
  },
};
