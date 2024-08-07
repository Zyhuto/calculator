
const calculatorFunctions = {
    add: function(a ,b){return a + b},
    subtract: function(a,b){return a - b},
    multiply: function(a,b){return a * b},
    divide: function(a,b){return a/b}
}

let firstNumber;
let secondNumber;
let operator;

const displayDiv = document.querySelector(".digit-display");
const digitContainer = document.querySelector(".numbers-container");

digitContainer.addEventListener("click", e => handleDigitClick(e));

function handleDigitClick(event){
    let target = event.target;
    if (target.classList.contains("digit")){
        updateDisplay(target.textContent)
    }

}

function operate (operator, number1, number2) {
    return operator(number1,number2);
}


function updateDisplay(n) {
    if (displayDiv.textContent == 0) {
        displayDiv.textContent = n;
    } else {
        displayDiv.textContent = displayDiv.textContent * 10 + +n
    }
    

}