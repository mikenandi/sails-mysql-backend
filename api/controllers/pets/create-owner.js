module.exports = {
  friendlyName: "Create owner",

  description: "",

  inputs: {
    fname: {
      type: "string",
    },
    lname: {
      type: "string",
    },
  },

  exits: {
    success: {
      statusCode: 200,
      description: "the owner was created",
    },
  },

  fn: async function ({ fname, lname }, exits) {
    try {
      const owner = { fname, lname };
      await User.create(owner).fetch();
      return exits.success(owner);
    } catch (err) {
      console.log(err.message);
    }
  },
};
