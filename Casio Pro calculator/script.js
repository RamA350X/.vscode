// ==========================================
// CASIO PRO CALCULATOR
// Main Application
// Phase 5.1
// ==========================================

// ------------------------------
// Display Elements
// ------------------------------

const expressionDisplay = document.querySelector(".expression");
const resultDisplay = document.querySelector(".result");

// ------------------------------
// Calculator State
// ------------------------------

const calculator = {

    expression: "",

    result: "0"

};

// ------------------------------
// Update Display
// ------------------------------

function updateDisplay(){

    expressionDisplay.textContent =
        calculator.expression || "Ready...";

    resultDisplay.textContent =
        calculator.result;

}

// ------------------------------
// Input Manager
// ------------------------------

function handleInput(value){

    switch(value){

        case "AC":

            clearCalculator();

            break;

        case "DEL":

        case "⌫":

            deleteCharacter();

            break;

        case "=":

            // Phase 5.3
            break;

        default:

            appendCharacter(value);

    }

}

// ------------------------------
// Append
// ------------------------------

function appendCharacter(value){

    calculator.expression += value;

    calculator.result =
        calculate(calculator.expression);

    updateDisplay();

}

// ------------------------------
// Delete
// ------------------------------

function deleteCharacter(){

    calculator.expression =
        calculator.expression.slice(0,-1);

    calculator.result =
        calculate(calculator.expression);

    updateDisplay();

}

// ------------------------------
// Clear
// ------------------------------

function clearCalculator(){

    calculator.expression="";

    calculator.result="0";

    updateDisplay();

}

// ------------------------------
// Button Events
// ------------------------------

document.querySelectorAll(".btn")
.forEach(button=>{

    button.addEventListener("click",()=>{

        handleInput(

            button.dataset.value

        );

    });

});

// ------------------------------

updateDisplay();

// ===========================
// Testing Tokenizer
// ===========================

console.log(

    tokenize("25+sin(30)*5")

);

function calculatePreview(){

    if(calculator.expression===""){

        calculator.result="0";
        return;
    }

    try{

        const converted =
            convertExpression(calculator.expression);

        calculator.result =
            Function('"use strict"; return (' + converted + ')')();

    }

    catch{

        calculator.result="...";
    }

}