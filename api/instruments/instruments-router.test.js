const db = require("../../data/db-config")
const request = require("supertest")
const server = require("../server")

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

describe("[GET] endpoint at /", () => {
  test("returns all of the instruments", async () => {
    const response = await request(server).get("/")
    expect(response.body).toHaveLength(8)
  })
  test("returns the correct status on successful call", async () => {
    const response = await request(server).get("/")
    expect(response.status).toBe(200)
  })
})

describe("[GET] at id endpoint", () => {
  test("returns the correct instrument correlating to id", async () => {
    const response = await request(server).get("/5")
    const correctInstrument = {"instrument_name": "Trombone", "instrument_family": "Brass", "instrument_id": 5}
    expect(response.body).toEqual(correctInstrument)
  })
})