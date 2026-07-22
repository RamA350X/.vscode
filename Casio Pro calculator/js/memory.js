// ======================================
// CASIO PRO CALCULATOR
// Memory Module
// ======================================

let memoryValue = 0;

// ----------------------------

function memoryClear(){

    memoryValue = 0;

}

// ----------------------------

function memoryRecall(){

    return memoryValue;

}

// ----------------------------

function memoryAdd(value){

    memoryValue += Number(value);

}

// ----------------------------

function memorySubtract(value){

    memoryValue -= Number(value);

}