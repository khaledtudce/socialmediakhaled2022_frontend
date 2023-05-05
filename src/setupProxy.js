const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://54.146.140.24:8800",
      changeOrigin: true,
    })
  );
};
