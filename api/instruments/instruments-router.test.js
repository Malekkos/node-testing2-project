const db = require("../../data/db-config")
const Instruments = require("../instruments/instruments-model")


beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe("Everything is all right", () => {
  test("9 times 3 does not equal 100", () => {
    expect(9 * 3).not.toEqual(100)
  })
})