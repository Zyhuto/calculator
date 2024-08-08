
const calculatorFunctions = {
    add: function(a ,b){return a + b},
    subtract: function(a,b){return a - b},
    multiply: function(a,b){return a * b},
    divide: function(a,b){return handleDivision(a,b)}
}
function handleDivision(a,b) {
    if (b == 0) {
        alert("Error: Divion by Zero")
        window.location.reload()}
    return a / b;
}

let numberMemory;
let currentOperator;
let newNumberB;
let equalPressedB;

const displayDiv = document.querySelector(".digit-display");
const digitContainer = document.querySelector(".numbers-container");
const operatorContainer = document.querySelector(".operators-container");
const equalButton = document.querySelector("#result")
const decimalButton = document.querySelector("#decimal")
const deleteButton = document.querySelector("#delete")

digitContainer.addEventListener("click", e => handleDigitClick(e));
operatorContainer.addEventListener("click", e => handleOperatorClick(e));
equalButton.addEventListener("click", e => handleEqualClick());

function handleDigitClick(event){
    let target = event.target;
    if (!target.classList.contains("numbers-container")){
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
    if (!equalPressedB && currentOperator) {
    processResult();
    currentOperator = null;
    equalPressedB = true;}

}
function processResult () {
    let result = calculatorFunctions[currentOperator](numberMemory,+displayDiv.textContent);
    displayDiv.textContent = Math.round(result * 1000000)/1000000;
    numberMemory = result;
    newNumberB = true;


}
function updateDisplay(n) {
    if (n === "X") {
         if (displayDiv.textContent.length == 1){
            displayDiv.textContent = "0";
        } else {displayDiv.textContent = displayDiv.textContent.slice(0, -1)}
        return;
    }

    if (displayDiv.textContent === "0" || newNumberB) {
        newNumberB = false; 
        if (n == "."){
            displayDiv.textContent ="0."}
            else {displayDiv.textContent=n}
    } else {displayDiv.textContent = displayDiv.textContent + n}  }

        
            

 

