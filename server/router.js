module.exports = (app) => {
  app.get("/", (req, res, next) => {
    console.log("get");
    res.send(["waterbodttle", "phone", "paper"]);
  });
};
