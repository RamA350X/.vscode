// ======================================
// CASIO PRO CALCULATOR
// Scientific Functions
// ======================================

let angleMode = "DEG";

// ----------------------
// Angle Conversion
// ----------------------

function toRadians(angle){

    if(angleMode === "DEG"){

        return angle * Math.PI / 180;

    }

    return angle;

}

// ----------------------
// Scientific Functions
// ----------------------

function sin(x){

    return Math.sin(toRadians(x));

}

function cos(x){

    return Math.cos(toRadians(x));

}

function tan(x){

    return Math.tan(toRadians(x));

}