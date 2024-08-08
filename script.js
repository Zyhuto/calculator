
const calculatorFunctions = {
    add: function(a ,b){return a + b},
    subtract: function(a,b){return a - b},
    multiply: function(a,b){return a * b},
    divide: function(a,b){return a/b}
}
let numberMemory;
let currentOperator;
let newNumberB;
let equalPressedB;
const displayDiv = document.querySelector(".digit-display");
const digitContainer = document.querySelector(".numbers-container");
const operatorContainer = document.querySelector(".operators-container");
const equalButton = document.querySelector("#result")

digitContainer.addEventListener("click", e => handleDigitClick(e));
operatorContainer.addEventListener("click", e => handleOperatorClick(e));
equalButton.addEventListener("click", e => handleEqualClick());

function handleDigitClick(event){
    let target = event.target;
    if (target.classList.contains("digit")){
        updateDisplay(target.textContent)
        if(equalPressedB) {
            numberMemory = null;
            equalPressedB = false;
        }
    }

}

function handleOperatorClick(event) {
    let target = event.target;
    if (target.classList.contains("operator"))
    {
        if (!numberMemory) {
            numberMemory = +displayDiv.textContent
            newNumberB = true;
            currentOperator = target.id
        } else if (currentOperator) {
            processResult();
            currentOperator = target.id;
        } else {
            currentOperator = target.id;
            equalPressedB = false;
            newNumberB = true;
        }
    }
}
function handleEqualClick(){
    processResult();
    currentOperator = null;
    equalPressedB = true;

}
function processResult () {
    let result = calculatorFunctions[currentOperator](numberMemory,+displayDiv.textContent);
    displayDiv.textContent = result;
    numberMemory = result;
    newNumberB = true;


}


function updateDisplay(n) {
    if (displayDiv.textContent == 0 || newNumberB) {
        displayDiv.textContent = n;
        newNumberB = false;
    } else {
        displayDiv.textContent = displayDiv.textContent * 10 + +n
    }
    

}