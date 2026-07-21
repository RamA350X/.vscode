// ======================================
// CASIO PRO CALCULATOR
// Parser Module
// Phase 5.2
// ======================================

/**
 * Converts an expression string
 * into an array of tokens.
 */

function tokenize(expression){

    const regex =
        /sin|cos|tan|asin|acos|atan|log|ln|√|π|e|n!|\d+(\.\d+)?|[()+\-*/%^]/g;

    return expression.match(regex) || [];

}

// ======================================
// Convert Display Expression
// into JavaScript Expression
// ======================================

function convertExpression(expression){

    return expression

        .replace(/×/g,"*")
        .replace(/÷/g,"/")
        .replace(/π/g,"Math.PI")
        .replace(/√\(/g,"Math.sqrt(");

}