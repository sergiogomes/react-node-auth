// Main starting point
const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const http = require("http");

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
