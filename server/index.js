// Main starting point
const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const http = require("http");
const mongoose = require("mongoose");

// DB Setup
// try to remove this param: '?retryWrites=true&w=majority' if you get an error of ciclic dependency
mongoose
  .connect(
    "mongodb+srv://admin:" +
      process.env.MONGO_ATLAS_PW +
      "@cluster0-htpq3.mongodb.net/node-angular?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const router = require("./router");

const app = express();

// App setupt
// Middlewares
app.use(morgan("combined")); // log
app.use(bodyParser.json({ type: "*/*" }));

router(app);

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
