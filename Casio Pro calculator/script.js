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
const memoryIndicator = document.getElementById("memoryIndicator");
const angleIndicator = document.getElementById("angleIndicator");

// ------------------------------
// Calculator State
// ------------------------------

const calculator = {

    expression: "",

    result: "0"

};

// ------------------------------
// Angle Mode
// ------------------------------

let angleMode = "DEG";

// ------------------------------
// Update Display
// ------------------------------

function updateDisplay() {

    expressionDisplay.textContent =
        calculator.expression || "Ready...";

    resultDisplay.textContent =
        calculator.result;

    memoryIndicator.textContent =
        memoryValue !== 0 ? "M" : "";

    angleIndicator.textContent = angleMode;

}

function showToast(message) {

    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 1500);

}

// ------------------------------
// Input Manager
// ------------------------------

function handleInput(value) {

    switch (value) {

        case "AC":

            clearCalculator();

            break;

        case "DEL":

        case "⌫":

            deleteCharacter();

            break;

        case "MODE":

            angleMode = angleMode === "DEG" ? "RAD" : "DEG";

            showToast("Angle Mode: " + angleMode);

            break;

        case "=":

            calculator.result = calculate(calculator.expression);

            addHistory(
                calculator.expression,
                calculator.result
            );

            updateDisplay();

            break;

        default:

            if (handleScientific(value))
                break;

            appendCharacter(value);
            break;

        case "MC":
            memoryClear();
            break;

        case "MR":

            calculator.expression += memoryRecall();
            calculator.result = calculate(calculator.expression);
            updateDisplay();
            break;

        case "M+":

            memoryAdd(calculator.result);
            break;

        case "M-":

            memorySubtract(calculator.result);
            break;

    }

}
// ------------------------------
// Append
// ------------------------------

function appendCharacter(value) {

    calculator.expression += value;

    if (/[+\-*/.(]$/.test(calculator.expression)) {

        calculator.result = "";

    }

    else {

        calculator.result =
            calculate(calculator.expression);

    }

    updateDisplay();

}

// ------------------------------
// Delete
// ------------------------------

function deleteCharacter() {

    calculator.expression =
        calculator.expression.slice(0, -1);

    calculator.result =
        calculate(calculator.expression);

    updateDisplay();

}

// ------------------------------
// Clear
// ------------------------------

function clearCalculator() {

    calculator.expression = "";

    calculator.result = "0";

    updateDisplay();

}

// ------------------------------
// Button Events
// ------------------------------

document.querySelectorAll(".btn")
    .forEach(button => {

        button.addEventListener("click", () => {

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

/*console.log(

    tokenize("25+sin(30)*5")

);*/

function calculatePreview() {

    if (calculator.expression === "") {

        calculator.result = "0";
        return;
    }

    try {

        const converted =
            convertExpression(calculator.expression);

        calculator.result =
            Function('"use strict"; return (' + converted + ')')();

    }

    catch {

        calculator.result = "...";
    }

}

const clearHistoryBtn = document.getElementById("clearHistoryBtn");

if (clearHistoryBtn) {

    clearHistoryBtn.addEventListener("click", () => {

        clearHistory();

    });

}

loadHistory();
renderHistory();

// ======================================
// Button Ripple Effect
// ======================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            (e.clientX - rect.left - size / 2) + "px";

        ripple.style.top =
            (e.clientY - rect.top - size / 2) + "px";

        this.appendChild(ripple);

        ripple.addEventListener("animationend", () => {

            ripple.remove();

        });

    });

});

