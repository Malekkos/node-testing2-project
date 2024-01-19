const db = require("../../data/db-config")

function getAll() {
  return db("instruments")
}

function getById(id) {
  return db("instruments")
  .where("instrument_id", id)
  .first()
}

function insert(instrument) {
  return db("instruments")
  .insert(instrument)
  .then(([id]) => {
    return db("instruments").where("instrument_id", id).select("instrument_family", "instrument_name").first()
  })
}

module.exports = { getAll, getById, insert }