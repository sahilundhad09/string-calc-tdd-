class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0
    }
    
   let delimiter = /[,\n]/
    let numbersString = numbers

    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n")
      delimiter = numbers.substring(2, delimiterEndIndex)
      numbersString = numbers.substring(delimiterEndIndex + 1)
    }

    const numberArray = numbersString.split(delimiter)
    return numberArray.reduce((sum, num) => sum + Number.parseInt(num), 0)

  }
}

module.exports = StringCalculator;