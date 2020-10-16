const Authentication = require("./controllers/authentication");

module.exports = (app) => {
  app.get("/", (req, res, next) => {
    res.send("Hello there! Only authentication route is available.");
  });

  app.post("/signup", Authentication.signup);
};
