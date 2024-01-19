const router = require("express").Router()
const Instruments = require("./instruments-model")


router.get("/", (req, res, next) => {
  res.json("WIP")
})


module.exports = router