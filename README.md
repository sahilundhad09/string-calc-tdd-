# String Calculator - TDD Kata Implementation

A Test-Driven Development implementation of the classic String Calculator kata using JavaScript and Jest.

## Overview

This project demonstrates clean TDD practices by building a string calculator incrementally, following the Red-Green-Refactor cycle. Each feature was developed by writing failing tests first, implementing minimal code to pass, then refactoring for better design.

## Features

The String Calculator supports:

- **Empty strings** → Returns 0
- **Single numbers** → Returns the number itself
- **Multiple comma-separated numbers** → Returns their sum
- **Newline delimiters** → Handles `\n` as delimiter alongside commas
- **Custom delimiters** → Supports format `//[delimiter]\n[numbers]`
- **Negative number validation** → Throws exception with all negative numbers listed
- **Large number filtering** → Ignores numbers greater than 1000

## Usage

\`\`\`javascript
const StringCalculator = require('./src/StringCalculator')
const calc = new StringCalculator()

// Basic usage
calc.add("")           // → 0
calc.add("1")          // → 1
calc.add("1,5")        // → 6
calc.add("1,2,3,4,5")  // → 15

// Newline delimiters
calc.add("1\n2,3")     // → 6
calc.add("1\n2\n3")    // → 6

// Custom delimiters
calc.add("//;\n1;2")   // → 3
calc.add("//|\n1|2|3") // → 6

// Error handling
calc.add("-1")         // → throws "negative numbers not allowed -1"
calc.add("1,-2,3,-4")  // → throws "negative numbers not allowed -2,-4"

// Large numbers ignored
calc.add("2,1001")     // → 2
calc.add("1000,1001,2") // → 1002
\`\`\`


## Development History

This project was built following strict TDD methodology. Here's the commit history showing the Red-Green-Refactor progression:

### Initial Setup
- `Initial project setup with Jest configuration`

### Basic Functionality
- `RED: Add test for empty string returns 0`
- `GREEN: Make empty string test pass`
- `RED: Add test for single number`
- `GREEN: Make single number test pass`
- `RED: Add test for two numbers`
- `GREEN: Make two numbers test pass`
- `REFACTOR: Simplify using reduce`

### Multiple Numbers
- `RED: Add test for multiple numbers - already passes`

### Delimiter Support
- `RED: Add test for newline delimiters`
- `GREEN: Support newline delimiters using regex`
- `RED: Add test for custom delimiters`
- `GREEN: Support custom delimiters`
- `REFACTOR: Extract delimiter parsing logic`

### Error Handling
- `RED: Add test for negative numbers exception`
- `GREEN: Throw exception for negative numbers`
- `RED: Add test for multiple negative numbers`
- `GREEN: Show all negative numbers in exception message`

### Advanced Features
- `RED: Add test for ignoring numbers > 1000`
- `GREEN: Ignore numbers bigger than 1000`
- `REFACTOR: Extract methods for better readability and single responsibility`

## Test Cases Covered

### Basic Operations
\`\`\`javascript
✓ Empty string returns 0
✓ Single number returns itself
✓ Two comma-separated numbers return sum
✓ Multiple numbers return sum
\`\`\`

### Delimiter Variations
\`\`\`javascript
✓ Newlines work as delimiters
✓ Mixed comma and newline delimiters
✓ Custom single-character delimiters
\`\`\`

### Error Scenarios
\`\`\`javascript
✓ Single negative number throws exception
✓ Multiple negative numbers show all in exception
✓ Exception message format: "negative numbers not allowed -1,-2"
\`\`\`

### Edge Cases
\`\`\`javascript
✓ Numbers greater than 1000 are ignored
✓ Number 1000 is included (boundary case)
✓ Custom delimiters work with all other rules
\`\`\`

## Architecture

The final implementation follows clean code principles:

- **Single Responsibility**: Each method has one clear purpose
- **Separation of Concerns**: Parsing, validation, and calculation are separate
- **Error Handling**: Clear exception messages for invalid input
- **Extensibility**: Easy to add new delimiter types or validation rules

### Key Methods

- `add(numbers)` - Main entry point
- `_parseDelimiter(numbers)` - Extracts delimiter and number string
- `_parseNumbers(numbersString, delimiter)` - Converts string to number array
- `_validateNumbers(numbers)` - Checks for negative numbers
- `_sumNumbers(numbers)` - Filters and sums valid numbers

## TDD Lessons Learned

1. **Start Simple**: Begin with the simplest possible test case
2. **Minimal Implementation**: Write only enough code to make tests pass
3. **Refactor Regularly**: Clean up code after tests pass
4. **One Test at a Time**: Focus on single failing test
5. **Descriptive Tests**: Test names clearly describe expected behavior


