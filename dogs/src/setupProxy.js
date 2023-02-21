module.exports = (app) => {
  app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
};
