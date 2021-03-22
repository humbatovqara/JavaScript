var number1, number2, operator, result, answer, True = 0,
    False = 0;

number1 = document.getElementById("number1");
number2 = document.getElementById("number2");
operator = document.getElementById("operator");
result = document.getElementById("result");
answer = document.getElementById("answer");
True = document.getElementById("true");
False = document.getElementById("false");

// Random number
function RandomNumber(min, max) {
    var number = Math.floor(Math.random() * (max - min)) + min;
    return number;
}

// New question create
function newQuestion() {
    var operation = ["+", "-", "*", "/"];
    operator.textContent = operation[RandomNumber(0, 4)]; // Select operator
    number1.textContent = RandomNumber(0, 50);
    number2.textContent = RandomNumber(0, 50);

    // Qalıqsız bölmə
    if (operator.textContent == "/") {
        while (true) {
            number2.textContent = RandomNumber(0, 50);
            if (number1.textContent % number2.textContent == 0) {
                break;
            }
        }
    }
}

// Onload new question start
window.onload = function () {
    newQuestion();
}

// Click answer button
answer.onclick = function () {
    var ans, n1, n2;
    n1 = Number(number1.textContent);
    n2 = Number(number2.textContent);

    switch (operator.textContent) {
        case "+":
            ans = n1 + n2;
            break;
        case "-":
            ans = n1 - n2;
            break;
        case "*":
            ans = n1 * n2;
            break;
        case "/":
            ans = n1 / n2;
            break;
    }
    if (result.value == ans) {
        True.textContent = Number(True.textContent) + 1;
    } else {
        False.textContent = Number(False.textContent) + 1;
    }
    newQuestion();
}