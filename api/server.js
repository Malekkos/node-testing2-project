const express = require("express")
const server = express()

server.use(express.json())

const Instruments = require("./instruments/instruments-model")


server.get("/", (req, res, next) => {
  Instruments.getAll()
  .then(instruments => {
    res.status(200).json(instruments)
  })
  .catch(error => {
    next(error)
  })
})

server.get("/:id", (req, res, next) => {
  res.json("WIP 2")
})

server.post("/", (req, res, next) => {
  res.json("WIP 3")
})


server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server