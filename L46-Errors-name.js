try {
    alerd("Javascript");
} catch (error) {
    document.getElementById("result").innerHTML =
        "Xəta adı: " + error.name + "<br>" +
        "Xəta mesajı: " + error.message;
}

// Xəta adı 6 fərqli dəyərə malikdir
/*
    1. EvalError    -   Eval() funksiyasında xəta yarandıqda | Artqı istifadə edilmir, yerinə SyntaxError tutur
    2. RangeError   -   "Sərhəddən kənar" xəta yarandıqda | Müəyyən aralıqdan kənar rəqəm alındıqda
    3. ReferenceError   -   Kodu düz yazmadıqda
    4. SyntaxError  -   Səhv yazı, kod sintaksisini düz yazmadıqda
    5. TypeError    -   Verilən tipi xətası
    6. URIError     -   EncodeURI() xətası yarandıqda

*/

var num = 7;

try {
    num.toPrecision(400);
} catch (error) {
    document.getElementById("result1").innerHTML = error.name;
}

try {
    num = y * 2;
} catch (error) {
    document.getElementById("result2").innerHTML = error.name;
}

try {
    eval("alert(Javascript')");
} catch (error) {
    document.getElementById("result3").innerHTML = error.name;
}

try {
    num.toUppercase();
} catch (error) {
    document.getElementById("result4").innerHTML = error.name;
}

try {
    decodeURI("%");
} catch (error) {
    document.getElementById("result5").innerHTML = error.name;
}