const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/1.0/*", {
      target: "https://api.itbook.store"
    })
  );
};
