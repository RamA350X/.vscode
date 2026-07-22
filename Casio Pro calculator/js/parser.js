// ======================================
// CASIO PRO CALCULATOR
// Parser Module
// ======================================

function convertExpression(expression) {

    return expression

        .replace(/×/g, "*")

        .replace(/÷/g, "/")

        .replace(/π/g, "Math.PI")

        .replace(/\be\b/g, "Math.E")

        .replace(/√\(/g, "Math.sqrt(")

        .replace(/log\(/g, "Math.log10(")

        .replace(/ln\(/g, "Math.log(")

        .replace(/sin\(([^()]*)\)/g,
            (_, value) =>
                angleMode === "DEG"
                    ? `Math.sin((${value})*Math.PI/180)`
                    : `Math.sin(${value})`
        )

        .replace(/cos\(([^()]*)\)/g,
            (_, value) =>
                angleMode === "DEG"
                    ? `Math.cos((${value})*Math.PI/180)`
                    : `Math.cos(${value})`
        )

        .replace(/tan\(([^()]*)\)/g,
            (_, value) =>
                angleMode === "DEG"
                    ? `Math.tan((${value})*Math.PI/180)`
                    : `Math.tan(${value})`
        )

        .replace(/(\d+(\.\d+)?)x²/g, "Math.pow($1,2)")

}


function calculate(expression) {

    if (expression === "") {

        return "0";

    }

    try {

        const converted = convertExpression(expression);

        console.log("Original:", expression);
        console.log("Converted:", converted);

        const answer = Function(
            '"use strict"; return (' + converted + ')'
        )();

        if (answer === undefined) {

            return "0";

        }

        return Number(answer.toPrecision(12));

    }

    catch {

        return "...";

    }

}