class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0
    }

    if (!numbers.includes(",")) 
        return parseInt(numbers);

    const numberArray = numbers.split(",")
    return numberArray.reduce((sum, num) => sum + Number.parseInt(num), 0)
  }
}

module.exports = StringCalculator;