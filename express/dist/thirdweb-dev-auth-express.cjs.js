'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-auth-express.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-auth-express.cjs.dev.js");
}
