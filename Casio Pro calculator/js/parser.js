// ======================================
// CASIO PRO CALCULATOR
// Parser Module
// ======================================

function convertExpression(expression){

    return expression

        .replace(/×/g,"*")

        .replace(/÷/g,"/")

        .replace(/π/g,"Math.PI")

        .replace(/e/g,"Math.E")

        .replace(/√\(/g,"Math.sqrt(")

        .replace(/sin\(/g,"sin(")

        .replace(/cos\(/g,"cos(")

        .replace(/tan\(/g,"tan(");

}

function calculate(expression){

    if(expression===""){

        return "0";

    }

    try{

        const converted = convertExpression(expression);

        const answer = Function(
            '"use strict"; return (' + converted + ')'
        )();

        if(answer===undefined){

            return "0";

        }

        return answer;

    }

    catch{

        return "...";

    }

}