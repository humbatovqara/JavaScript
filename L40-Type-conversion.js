/*
JS dəyişənləri yeni dəyişənə və ya başqa verilən tipinə çevrilə bilər.
Bunu JS funksiyası işlədərək və ya avtomatik olaraq JS-in özü ilə edə bilərik.
*/

// Qlobal metod olan String() - number tipini string-ə çevirə bilər
var x = 7;
document.getElementById("result").innerHTML =
    String(x) + "<br>" + // Dəyişəni conversion edir
    String(700) + "<br>" + // Number-i conversion edir
    String(10 + 8) + "<br>" + // İfadəni conversion edir
    typeof String(x) + "<br>" +
    typeof String(700) + "<br>" +
    typeof String(10 + 8) + "<br>" + "<hr>";

// toString() metodu da eyni prosesi icra edir
document.getElementById("result1").innerHTML =
    x.toString() + "<br>" + // Dəyişəni conversion edir
    (700).toString() + "<br>" + // Number-i conversion edir
    (10 + 8).toString() + "<br>" + // İfadəni conversion edir
    typeof x.toString() + "<br>" +
    typeof (700).toString() + "<br>" +
    typeof (10 + 8).toString() + "<br>" + "<hr>";

// toExponential(), toFixed(), toPrecision() metodları da string verilən tipinə conversion edir
document.getElementById("result2").innerHTML =
    x.toExponential() + "<br>" +
    x.toFixed() + "<br>" +
    x.toPrecision() + "<br>" +
    typeof x.toExponential() + "<br>" +
    typeof x.toFixed() + "<br>" +
    typeof x.toPrecision() + "<br>" + "<hr>";

// Qlobal metod String() - Boolean-ları string-ə çevirə bilir
y = true;
document.getElementById("result3").innerHTML =
    String(false) + "<br>" +
    String(y) + "<br>" +
    typeof String(false) + "<br>" +
    typeof String(y) + "<br>" + "<hr>";

// toString() metodu da Boolean tipləri üçün eyni prosesi icra edir
document.getElementById("result4").innerHTML =
    false.toString() + "<br>" +
    y.toString() + "<br>" +
    typeof false.toString() + "<br>" +
    typeof y.toString() + "<br>" + "<hr>";

// Qlobal metod String() - Tarix (Date) string-ə çevirir
var z = new Date();
document.getElementById("result5").innerHTML =
    String(new Date()) + "<br>" +
    String(z) + "<br>" +
    typeof String(new Date()) + "<br>" +
    typeof String(z) + "<br>" + "<hr>";



/*
Qlobal metod Number() - string-ləri number-ə çevirir
Number olan stringlər ("3.14" kimi) number-ə çevrilir (3.14 kimi)
Boş string-lər 0-a çevrilir
Başqa hər hansı bir şey NaN-a (Not a Number) çevrilir
*/
var num1 = "3.14";
document.getElementById("result6").innerHTML =
    Number("10") + "<br>" +
    Number(num1) + "<br>" +
    Number("") + "<br>" +
    Number(" ") + "<br>" +
    Number("10 17") + "<br>" +
    Number("Javascript") + "<br>" +
    Number(" 100") + "<br>" +
    typeof Number("10") + "<br>" +
    typeof Number(num1) + "<br>" +
    typeof Number("") + "<br>" +
    typeof Number(" ") + "<br>" +
    typeof Number("10 17") + "<br>" +
    typeof Number("Javascript") + "<br>" +
    typeof Number(" 100") + "<br>" + "<hr>";

// typeof NaN - number

// + operatoru bir dəyişəni Number tipinə conversion edə bilir
var num2 = "5"; // String
var num3 = +num2; // Number
var num4 = "JavaScript"; // typeof NaN
var num5 = +num4;
document.getElementById("result7").innerHTML =
    typeof num2 + "<br>" +
    typeof num3 + "<br>" +
    typeof num4 + "<br>" +
    typeof num5 + "<br>" + "<hr>";

// Dəyişən conversion edilə bilməzsə, yenə də number olur, ancaq NaN dəyəri ilə
// Qlobal metod Number() - Booleanları number-ə conversion edə bilir
document.getElementById("result8").innerHTML =
    Number(true) + "<br>" +
    Number(false) + "<br>" + "<hr>";

// Qlobal metod Number() - Tarix (Date) number-ə conversion edə bilir
var d = new Date();
document.getElementById("result9").innerHTML =
    Number(d) + "<br>" +
    typeof Number(d) + "<br>" + "<hr>";



// Null
document.getElementById("result10").innerHTML = 
(7 + null) + "<br>" + 
("7" + null) + "<br>" + 
("7" + "2") + "<br>" + 
("7" - 2) + "<br>" + 
("7" * "2") + "<br>" +
("8" / "2") + "<br>" + "<hr>";