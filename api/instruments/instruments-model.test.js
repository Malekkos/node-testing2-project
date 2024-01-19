const db = require("../../data/db-config")
const Instruments = require("../instruments/instruments-model")


beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})


describe("Everything is right in the universe", () => {
  test("3 times 3 equals 9", () => {
    expect(3 * 3).toEqual(9)
    let first_value = 3
    let second_value = 3
    expect(first_value * second_value).toEqual(9)
  })
  test("the string 'superfluous' contains an r", () => {
    let string = "superfluous"
    expect(string).toContain("r")
  })
})