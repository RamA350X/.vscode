let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){

            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

       

    })
})
document.addEventListener("keydown", (e) => {

    const key = e.key;

    // Numbers and operators
    if ("0123456789+-*/.%".includes(key)) {
        string += key;
        input.value = string;
    }

    // Enter key (=)
    else if (key === "Enter") {
        try {
            string = eval(string).toString();
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    }

    // Backspace (DEL)
    else if (key === "Backspace") {
        string = string.slice(0, -1);
        input.value = string;
    }

    // Escape (AC)
    else if (key === "Escape") {
        string = "";
        input.value = "";
    }
});