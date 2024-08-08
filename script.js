
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

digitContainer.addEventListener("click", e => handleDigitClick(e));
operatorContainer.addEventListener("click", e => handleOperatorClick(e));
equalButton.addEventListener("click", e => handleEqualClick());
decimalButton.addEventListener("click", e => updateDisplay("."))

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
        useDecimalB = false;
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
    displayDiv.textContent = result;
    numberMemory = result;
    newNumberB = true;
    useDecimalB = false;


}
function updateDisplay(n) {
    
    if (displayDiv.textContent === "0" || newNumberB) {
        newNumberB = false; 
        if (n == "."){
            displayDiv.textContent="0."}
            else {displayDiv.textContent=n}
    } else {displayDiv.textContent = displayDiv.textContent + n}}

        
            

 

