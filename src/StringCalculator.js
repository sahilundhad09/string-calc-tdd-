class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0
    }

    const { delimiter, numbersString } = this._parseDelimiter(numbers)
    const numberArray = numbersString.split(delimiter)
    const parsedNumbers = numberArray.map((num) => Number.parseInt(num))

    this._checkForNegatives(parsedNumbers)

    return parsedNumbers.reduce((sum, num) => sum + num, 0)
  }

  _parseDelimiter(numbers) {
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n")
      const delimiter = numbers.substring(2, delimiterEndIndex)
      const numbersString = numbers.substring(delimiterEndIndex + 1)
      return { delimiter, numbersString }
    }

    return { delimiter: /[,\n]/, numbersString: numbers }
  }

  _checkForNegatives(numbers) {
    const negatives = numbers.filter((num) => num < 0)
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives[0]}`)
    }
  }
}

module.exports = StringCalculator
