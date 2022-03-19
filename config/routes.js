/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  "POST /create": { action: "friend/create" },
  "GET /read": { action: "friend/read" },
  "POST /create-owner": { action: "pets/create-owner" },
  "POST /create-pet": { action: "pets/create-pet" },
  "GET /read-user": { action: "pets/read-owner" },
};
