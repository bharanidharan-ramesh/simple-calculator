let currentInput = '';
let previousInput = '';
let operation = null;

function appendNumber(number) {
  if (currentInput.includes('.') && number === '.') return;
  currentInput += number;
  updateDisplay();
}

function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = null;
  updateDisplay();
}

function calculate() {
  let computation;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }
  currentInput = computation.toString();
  operation = null;
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

window.appendNumber = appendNumber;
window.setOperation = setOperation;
window.clearDisplay = clearDisplay;
window.calculate = calculate;
