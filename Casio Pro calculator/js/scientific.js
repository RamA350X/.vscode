// ======================================
// CASIO PRO CALCULATOR
// Scientific Functions
// ======================================

// ======================================
// CASIO PRO CALCULATOR
// Scientific Button Handler
// ======================================

function handleScientific(value) {

    switch (value) {

        case "sin(":
        case "cos(":
        case "tan(":
        case "asin(":
        case "acos(":
        case "atan(":
        case "log(":
        case "ln(":
        case "√(":

            appendCharacter(value);
            return true;

        case "π":

            appendCharacter("π");
            return true;

        case "e":

            appendCharacter("e");
            return true;

        case "xʸ":

            appendCharacter("**");

            return true;

        case "x²":

            appendCharacter("**2");

            return true;

        case "1/x":

            calculator.expression =
                "1/(" + calculator.expression + ")";

            calculator.result =
                calculate(calculator.expression);

            updateDisplay();

            return true;



        default:

            return false;

    }

}