const express = require("express")
const server = express()
const instrumentsRouter = require("./instruments/instruments-router")

server.use(express.json())

server.use("/api/instruments", instrumentsRouter)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server