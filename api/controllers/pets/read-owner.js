module.exports = {
  friendlyName: "Read owner",

  description: "",

  inputs: {},

  exits: {
    success: {
      statusCode: 200,
      description: "the data was succesfully queryed",
    },
  },

  fn: async function (inputs, exits) {
    const data = await User.find().populate("pets");

    return exits.success(data);
  },
};
