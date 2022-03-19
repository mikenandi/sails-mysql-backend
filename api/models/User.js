/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    // start

    fname: {
      type: "string",
    },

    lname: {
      type: "string",
    },

    pets: {
      collection: "Pet",
      via: "owners",
    },
  },
};
