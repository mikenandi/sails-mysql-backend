const crypto = require("crypto");
module.exports = {
  friendlyName: "Generate unique code",

  description:
    "the helper for generating unique strings which will be used as unique code",

  inputs: {
    codeStart: {
      type: "string",
      example: "ID",
      description:
        "the code start is the one iddentifying the code and it should be in capital letters",
    },
  },

  exits: {
    success: {
      description: "All done.",
    },
  },

  fn: async function ({ codeStart }, exits) {
    try {
      //To generate random number which is btn 10-19
      let num = Math.floor(Math.random() * 10 + 10);

      //to generate random string with the number generated above
      const str = crypto
        .randomBytes(num)
        .toString("base64")
        .replace(/[/\+=]/g, "");

      return exits.success(codeStart.concat(str));
    } catch (err) {
      console.log(err.message);
    }
  },
};
