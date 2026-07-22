// ======================================
// CASIO PRO CALCULATOR
// History Module
// ======================================

let history = [];

function addHistory(expression, result){

    history.unshift({

        expression,
        result

    });

    saveHistory();

    renderHistory();

}

function clearHistory(){

    history = [];

    saveHistory();

    renderHistory();

}

function saveHistory(){

    localStorage.setItem(

        "casio-history",

        JSON.stringify(history)

    );

}

function loadHistory(){

    const data = localStorage.getItem(

        "casio-history"

    );

    if(data){

        history = JSON.parse(data);

    }

}

// ======================================
// Render History
// ======================================

function renderHistory() {

    const historyList = document.getElementById("historyList");

    if (!historyList) return;

    historyList.innerHTML = "";

    history.forEach((item, index) => {

        const div = document.createElement("div");

        div.className = "history-item";

        div.innerHTML = `
            <div class="history-expression">${item.expression}</div>
            <div class="history-result">= ${item.result}</div>
        `;

        div.addEventListener("click", () => {

            calculator.expression = item.expression;
            calculator.result = item.result;

            updateDisplay();

        });

        historyList.appendChild(div);

    });

}