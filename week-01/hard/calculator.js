/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
const mathjs = require('mathjs');

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(number){
    this.result +=number
  }
  subtract(number){
    this.result -=number
  }
  multiply(number){
    this.result *=number
  }

  divide(num) {
    if (num === 0 || this.result === Infinity || this.result === -Infinity) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(exp) {
    exp = exp.split("").filter((ele) => {
      if ("0123456789+-/*().eE ".includes(ele)) {
        return true;
      } else {
        throw new Error("Invalid expression: Contains invalid characters");
      }
    }).join("");

    if (exp.includes(" / 0")) { // Check for division by zero because mathjs works differently I don't know why
      throw new Error("Cannot divide by zero");
    }

    try {
      this.result = mathjs.evaluate(exp);
    } catch (error) {
      throw new Error("Error evaluating expression:", error.message);
    }

    if (isNaN(this.result)) {
      throw new Error("Expression resulted in NaN.");
    }

    return this.result;
  }
}

module.exports = Calculator;
