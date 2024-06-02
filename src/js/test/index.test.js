/* eslint-disable */
// test.js

// Function definitions to test various stylistic rules
const myFunction1 = () => {
  const value = 10

  if (value > 5) {
    console.log('Value is greater than 5')
  } else {
    console.log('Value is 5 or less')
  }

  const result = value > 5 ? 'High' : 'Low'

  const array = [1, 2, 3]
  array.forEach(item => {
    console.log(item)
  })

  return result
}

// Testing object and array formatting rules
const myObject = { a: 1, b: 2, c: 3 }
const myArray = [1, 2, 3, 4, 5]

// Testing padding and spacing rules
if (myArray.length > 0) {
  console.log('Array is not empty')
}

const myFunction2 = param => {
  return param ? true : false
}

// Testing invalid typeof comparison
const count = 0
if (typeof count === 'number') {
  console.log('Count is a number')
}

// Testing unused variables
const unusedVar = 'This is unused'

// Function with multiple return statements
const complexFunction = () => {
  if (count > 10) return 'High'
  if (count < 0) return 'Low'
  return 'Medium'
}

// Testing no-use-before-define
myDefinedFunction()

function myDefinedFunction () {
  console.log('Function called before definition')
}

// Export statement to test sorting
export { myFunction1, myFunction2, myObject, myArray }
