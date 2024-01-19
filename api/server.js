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
  const id = req.params.id
  Instruments.getById(id)
  .then(instrument => {
    res.status(200).json(instrument)
  })
  .catch(error => {
    next(error)
  })
})

server.post("/", (req, res, next) => {
  const newInstrument = req.body

  Instruments.insert(newInstrument)
  .then(instrument => {
    res.status(201).json(instrument)
  })
  .catch(error => {
    next(error)
  })
})


server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server