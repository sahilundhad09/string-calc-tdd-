class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0
    }

    const { delimiter, numbersString } = this._parseDelimiter(numbers)
    const parsedNumbers = this._parseNumbers(numbersString, delimiter)

    this._validateNumbers(parsedNumbers)

    return this._sumNumbers(parsedNumbers)
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

  _parseNumbers(numbersString, delimiter) {
    return numbersString.split(delimiter).map((num) => Number.parseInt(num))
  }

  _validateNumbers(numbers) {
    const negatives = numbers.filter((num) => num < 0)
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`)
    }
  }

  _sumNumbers(numbers) {
    return numbers.filter((num) => num <= 1000).reduce((sum, num) => sum + num, 0)
  }
}

module.exports = StringCalculator
