class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0
    }

    const { delimiter, numbersString } = this._parseDelimiter(numbers)
    const numberArray = numbersString.split(delimiter)
    return numberArray.reduce((sum, num) => sum + Number.parseInt(num), 0)
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
}

module.exports = StringCalculator
