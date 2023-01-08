let initialDisplayValue = "0";
let calculatorDisplay = document.querySelector(".calculator__display");

calculatorDisplay.innerHTML = initialDisplayValue;

let numberButtons = document.querySelectorAll(".number");
let currentDisplayValue = initialDisplayValue;
let decimal = document.querySelector(".decimal");
let clearDisplay = document.querySelector(".clear");
let operators = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equal");

const display = (input) => {
  calculatorDisplay.innerHTML = input;
};

Array.from(numberButtons).forEach((numberButton) => {
  numberButton.addEventListener("click", (event) => {
    if (currentDisplayValue === "0") {
      currentDisplayValue = event.target.innerHTML;
    } else {
      currentDisplayValue += event.target.innerHTML;
    }
    // console.log(currentDisplayValue);
    display(currentDisplayValue);
  });
});

decimal.addEventListener("click", () => {
  if (!currentDisplayValue.includes(".")) {
    currentDisplayValue += ".";
  }
  display(currentDisplayValue);
});

clearDisplay.addEventListener("click", () => {
  currentDisplayValue = initialDisplayValue;
  display(currentDisplayValue);
});

const isOperator = (x) => {
  let flag = false;
  switch (x) {
    case "+":
      flag = true;
      break;
    case "-":
      flag = true;
      break;
    case "*":
      flag = true;
      break;
    case "/":
      flag = true;
      break;

    default:
      break;
  }

  return flag;
};

Array.from(operators).forEach((operator) => {
  operator.addEventListener("click", (event) => {
    lastChar = currentDisplayValue[currentDisplayValue.length - 1];
    if (!isOperator(lastChar)) {
      if (operator.classList.contains("plus")) {
        currentDisplayValue += "+";
      } else if (operator.classList.contains("minus")) {
        currentDisplayValue += "-";
      } else if (operator.classList.contains("times")) {
        currentDisplayValue += "*";
      } else if (operator.classList.contains("divide")) {
        currentDisplayValue += "/";
      }
    }

    display(currentDisplayValue);
  });
});

equalButton.addEventListener("click", (event) => {
  try {
    let finalResult = eval(currentDisplayValue);
    currentDisplayValue = finalResult;
    display(currentDisplayValue);
  } catch (error) {
    console.log(error);
  }
});
