class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0
    }

    if (!numbers.includes(",")) 
        return parseInt(numbers);

    const numberArray = numbers.split(",")
    let sum = 0
    for (let i = 0; i < numberArray.length; i++) {
      sum += Number.parseInt(numberArray[i])
    }
    return sum 
  }
}

module.exports = StringCalculator;