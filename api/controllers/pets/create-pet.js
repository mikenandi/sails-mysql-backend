const crypto = require("crypto");
module.exports = {
  friendlyName: "Create pet",

  description: "the action for creating the new pet in the system",

  inputs: {
    breed: {
      type: "string",
    },
    type: {
      type: "string",
    },
    name: {
      type: "string",
    },
    owner: {
      type: "string",
    },
  },

  exits: {
    success: {
      statusCode: 201,
      description: "the pet was created",
    },
  },

  fn: async function ({ breed, type, name, owner }, exits) {
    try {
      const petCode = await sails.helpers.gencode("PT_");
      const pet = { breed, type, name, petCode };
      const dt = await User.find({ select: ["id"], where: { name: owner } });

      await User.addToCollection(1, "pets", 2);
      await Pet.create(pet);

      return exits.success({ pet });
    } catch (err) {
      console.log(err.message);
    }
  },
};
