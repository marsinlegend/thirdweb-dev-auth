'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-auth-next.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-auth-next.cjs.dev.js");
}
