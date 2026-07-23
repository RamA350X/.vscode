// ======================================
// CASIO PRO CALCULATOR
// Parser Module
// ======================================

// ======================================
// Factorial
// ======================================

function factorial(n) {

    n = Number(n);

    if (n < 0 || !Number.isInteger(n)) {

        throw new Error("Invalid factorial");

    }

    let result = 1;

    for (let i = 2; i <= n; i++) {

        result *= i;

    }

    return result;

}

function convertExpression(expression) {

    return expression

        .replace(/×/g, "*")

        .replace(/÷/g, "/")

        .replace(/π/g, "Math.PI")

        .replace(/\be\b/g, "Math.E")

        .replace(/√\(/g, "Math.sqrt(")

        .replace(/log\(/g, "Math.log10(")

        .replace(/ln\(/g, "Math.log(")

        .replace(/asin\(([^()]*)\)/g,
            (_, value) =>
                angleMode === "DEG"
                    ? `(Math.asin(${value})*180/Math.PI)`
                    : `Math.asin(${value})`
        )

        .replace(/acos\(([^()]*)\)/g,
            (_, value) =>
                angleMode === "DEG"
                    ? `(Math.acos(${value})*180/Math.PI)`
                    : `Math.acos(${value})`
        )

        .replace(/atan\(([^()]*)\)/g,
            (_, value) =>
                angleMode === "DEG"
                    ? `(Math.atan(${value})*180/Math.PI)`
                    : `Math.atan(${value})`
        )

        .replace(/(?<!a)sin\(([^()]*)\)/g,
            (_, value) =>
                angleMode === "DEG"
                    ? `Math.sin((${value})*Math.PI/180)`
                    : `Math.sin(${value})`
        )

        .replace(/(?<!a)cos\(([^()]*)\)/g,
            (_, value) =>
                angleMode === "DEG"
                    ? `Math.cos((${value})*Math.PI/180)`
                    : `Math.cos(${value})`
        )

        .replace(/(?<!a)tan\(([^()]*)\)/g,
            (_, value) =>
                angleMode === "DEG"
                    ? `Math.tan((${value})*Math.PI/180)`
                    : `Math.tan(${value})`
        )


        .replace(/(\d+(\.\d+)?)x²/g, "Math.pow($1,2)")
        .replace(/(\d+(\.\d+)?)x³/g, "Math.pow($1,3)")
        .replace(/(\d+(\.\d+)?)xʸ(\d+(\.\d+)?)/g, "Math.pow($1,$3)")
        .replace(/1\/x(\d+(\.\d+)?)/g, "1/($1)")
        .replace(
            /(\d+)n!/g,
            "factorial($1)"
        )

}

function balanceBrackets(expression) {

    const open =

        (expression.match(/\(/g) || []).length;

    const close =

        (expression.match(/\)/g) || []).length;

    return expression + ")".repeat(open - close);

}

function calculate(expression) {

    if (expression === "") {

        return "0";

    }

    try {

        expression = balanceBrackets(expression);

        const converted =
            convertExpression(expression);

        console.log("Original:", expression);
        console.log("Converted:", converted);

        const answer = Function(
            '"use strict"; return (' + converted + ')'
        )();

        if (!Number.isFinite(answer)) {

            return "Math Error";

        }

        if (answer === undefined) {

            return "0";

        }

        return Number(answer.toPrecision(12));

    }

    catch (error) {

        console.error(error);

        if (error instanceof SyntaxError) {

            return "Syntax Error";

        }

        if (error instanceof RangeError) {

            return "Math Error";

        }

        if (error instanceof TypeError) {

            return "Math Error";

        }

        return "Error";

    }

}