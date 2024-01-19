const router = require("express").Router()
const Instruments = require("./instruments-model")


router.get("/", (req, res, next) => {
  Instruments.getAll()
  .then(instruments => {
    res.status(200).json(instruments)
  })
  .catch(error => {
    next(error)
  })
})

router.get("/:id", (req, res, next) => {
  res.json("WIP 2")
})

router.post("/", (req, res, next) => {
  res.json("WIP 3")
})

module.exports = router