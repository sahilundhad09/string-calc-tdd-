const StringCalculator = require("../src/StringCalculator")

describe("StringCalculator", () => {
  test("should return 0 for empty string", () => {
    const calculator = new StringCalculator()
    expect(calculator.add("")).toBe(0)
  })

  test("should return the number itself for single number", () => {
    const calculator = new StringCalculator()
    expect(calculator.add("1")).toBe(1)
  })

  test("should return sum of two comma-separated numbers", () => {
    const calculator = new StringCalculator()
    expect(calculator.add("1,5")).toBe(6)
    expect(calculator.add("2,3")).toBe(5)
  })

  test("should handle any amount of numbers", () => {
    const calculator = new StringCalculator()
    expect(calculator.add("1,2,3")).toBe(6)
    expect(calculator.add("1,2,3,4,5")).toBe(15)
  })

  test("should handle newlines between numbers", () => {
    const calculator = new StringCalculator()
    expect(calculator.add("1\n2,3")).toBe(6)
    expect(calculator.add("1\n2\n3")).toBe(6)
  })
})