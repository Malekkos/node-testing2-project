const router = require("express").Router()
const Instruments = require("./instruments-model")


router.get("/", (req, res, next) => {
  res.json("WIP")
})

router.get("/:id", (req, res, next) => {
  res.json("WIP 2")
})

router.post("/", (req, res, next) => {
  res.json("WIP 3")
})

module.exports = router