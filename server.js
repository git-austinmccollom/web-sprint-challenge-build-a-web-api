const express = require("express");
const server = express();
const morgan = require("morgan");
const logger = morgan("combined");
const projectRouter = require("./data/helpers/projectRouter");

server.use(express.json());
server.use(logger);

server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Hello World</h2>`);
});

module.exports = server;
