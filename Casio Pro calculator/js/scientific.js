// ======================================
// CASIO PRO CALCULATOR
// Scientific Functions
// ======================================

// ======================================
// CASIO PRO CALCULATOR
// Scientific Button Handler
// ======================================

function handleScientific(value){

    switch(value){

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

        default:

            return false;

    }

}