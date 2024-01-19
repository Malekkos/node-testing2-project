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

describe("getAll method works as intended", () => {
  test("The return of getAll has a length of 8", async () => {
    const result = await Instruments.getAll()
    expect(result.length).toEqual(8)
  })
  test("the return of a instrument from getAll has an instrument_name and instrument_family", async () => {
    const result = await Instruments.getAll()
    expect(result[3].instrument_name).toBe("Clarinet")
    expect(result[3].instrument_family).toBe("Woodwind")
  })
})

describe("getById method works as intended", () => {
  test("the return of getById is only one object", async () => {
    const result = await Instruments.getById(3)
    const expected = {"instrument_family": "Woodwind", "instrument_id": 3, "instrument_name": "Flute"}
    expect(result).toMatchObject(expected)
  })
  test("the return of getById has 3 fields", async () => {
    const result = await Instruments.getById(6)
    expect(result).toHaveProperty("instrument_family" && "instrument_name" && "instrument_id")
  })
})