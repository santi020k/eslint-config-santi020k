// example.js

// This is an unused variable
const unusedVar = 'I am not used'

// Testing import sorting and unused imports
import React, { useState } from 'react'
import { useEffect } from 'react'

// This function should have an arrow function style
function regularFunction() {
  console.log('This should be a warning')
}

// Testing unused imports and sorting
import { useContext } from 'react'
import { useCallback } from 'react'

// Incorrect quote style
const doubleQuotes = "This should be single quotes"

// Testing simple import sort and unused imports
import { useMemo } from 'react'
import PropTypes from 'prop-types'

// Incorrect indentation
  const incorrectIndentation = true

// Testing no-void and prefer-arrow-callback
const voidFunction = () => void console.log('No void operator allowed here')

setTimeout(function() {
  console.log('Prefer arrow callback')
}, 1000)

// Testing multiline ternary
const value = true
const ternaryValue = value ? 'Value is true' : 'Value is false'

// Testing padding lines and max line length
function exampleFunction() {
  const message = 'This line is too long, it should be wrapped at 120 characters to meet the max-len rule set in the config'
  console.log(message)
}

// Testing no nested ternary and no children prop
const nestedTernary = value ? (value ? 'Value is true' : 'Value is false') : 'Value is false'

// React component for testing
const ExampleComponent = () => {
  // Hooks should be destructured
  const [state, setState] = useState(0)

  useEffect(() => {
    setState(1)
  }, [])

  return (
    <div>
      <p>{doubleQuotes}</p>
    </div>
  )
}

ExampleComponent.propTypes = {
  state: PropTypes.number,
}
