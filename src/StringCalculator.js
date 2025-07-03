class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0
    }

    const { delimiter, numbersString } = this._parseDelimiter(numbers)
    const numberArray = numbersString.split(delimiter)
    const parsedNumbers = numberArray.map((num) => Number.parseInt(num))

    const negatives = parsedNumbers.filter((num) => num < 0)
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`)
    }

    return parsedNumbers.filter((num) => num <= 1000).reduce((sum, num) => sum + num, 0)
  }

  _parseDelimiter(numbers) {
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n")
      const customDelimiter = numbers.substring(2, delimiterEndIndex)
      const numbersString = numbers.substring(delimiterEndIndex + 1)
      return { delimiter: new RegExp(customDelimiter), numbersString }
    }

    return { delimiter: /[,\n]/, numbersString: numbers }
  }
}

module.exports = StringCalculator
