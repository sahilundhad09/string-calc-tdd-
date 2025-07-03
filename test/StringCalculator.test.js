const StringCalculator = require("../src/StringCalculator")

describe("StringCalculator", () => {
  test("should return 0 for empty string", () => {
    const calculator = new StringCalculator()
    expect(calculator.add("")).toBe(0)
  })
})