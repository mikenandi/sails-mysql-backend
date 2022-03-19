/**
 * Pet.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    breed: {
      type: "string",
    },
    type: {
      type: "string",
    },
    name: {
      type: "string",
    },
    petCode: {
      type: "string",
      unique: true,
      required: true,
    },
    //assocaitions
    owners: {
      collection: "User",
      via: "pets",
    },
  },
};
