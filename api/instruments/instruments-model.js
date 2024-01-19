const db = require("../../data/db-config")

function getAll() {
  return db("instruments")
}

function getById(id) {
  return db("instruments")
  .where("id", id)
  .first()
}

function insert(instrument) {
  return db("instruments")
  .insert(instrument)
  .then(([id]) => {
    return db("instruments").where("id", id)
  })
}

module.exports = { getAll, getById, insert }