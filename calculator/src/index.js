const maths = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const operators = Object.keys(maths);

const isOperator = (operator) => operators.includes(operator);
const isNumber = (num) => typeof num === 'number' && !Number.isNaN(num);
const isNumbers = (nums) => nums.every(isNumber);

const isValid = (left, right, operator) => {
  return isNumbers([left, right]) && isOperator(operator);
};
const isNotValid = (...args) => !isValid(...args);

const calculate = (left, right, operator) => {
  if (isNotValid(left, right, operator)) {
    return NaN;
  }
  const math = maths[operator];
  return math(left, right);
};

const parse = (expression) => {
  const clearExpression = expression.replaceAll(' ', '');
  const hasOperator = (operator) => clearExpression.includes(operator);
  const [currentOperator] = operators.filter(hasOperator);
  const operands = clearExpression.split(currentOperator);

  const [left, right] = operands;
  if (left === '') {
    return [null, parseFloat(right), currentOperator];
  }

  return [parseFloat(left), parseFloat(right), currentOperator];
};

export default (expression, acc = 0) => {
  const [left, right, operator] = parse(expression);
  const leftOrAcc = left === null ? acc : left;
  return calculate(leftOrAcc, right, operator);
};
