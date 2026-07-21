// ==========================================
// CASIO PRO CALCULATOR
// Keyboard Support
// ==========================================

document.addEventListener("keydown", function(event){

    const key = event.key;

    // Numbers

    if(/[0-9]/.test(key)){

        handleInput(key);
        highlightButton(key);
        return;

    }

    // Operators

    switch(key){

        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
        case ".":
        case "(":
        case ")":

            handleInput(key);
            highlightButton(key);
            return;

        case "Backspace":

            handleInput("DEL");
            highlightButton("DEL");
            return;

        case "Delete":

            handleInput("AC");
            highlightButton("AC");
            return;

        case "Escape":

            handleInput("AC");
            highlightButton("AC");
            return;

        case "Enter":

            event.preventDefault();

            handleInput("=");
            highlightButton("=");

            return;

    }

});

function highlightButton(value){

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button=>{

        if(button.dataset.value===value){

            button.classList.add("active-key");

            setTimeout(()=>{

                button.classList.remove("active-key");

            },150);

        }

    });

}