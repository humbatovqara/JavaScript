// Operators
var x, y, z, sum, sub, multi, div, mod, a, b, c;

// Atama | Mənimsətmə
x = 70;
y = x;

// Addition | Toplama
a = 10;
b = 5;
sum = a + b;

// Subtraction | Çıxma
sub = a - b;

// Multiplication | Vurma
multi = a * b;

// Divison | Bölmə
div = a / b;

// Modules | Qalıq
mod = a % b;

// Increment | Artırma
z = x++;
c = ++b; 

// Decrement | Azaltma
z = x--;
c = --b;

document.getElementById("result").innerHTML = "z bərabərdir: " + z + "<br>" + "x bərabərdir: " + x;
document.getElementById("result1").innerHTML = "c bərabərdir: " + c + "<br>" + "b bərabərdir: " + b + "<br>" + "<br>";

// Assignment Operators | Mənimsətmə operatorları
// =
// +=
var q, t, e, r, u;
q = 20;
q += 12; // q = q + 12

// -=
t = 18;
t -= 3; // t = t - 3

// *=
e = 30;
e *= 3; // e = e * 3

// /=
r = 5;
r /= 2; // r = r / 2

// %=
u = 7;
u %= 3; // u = u % 3

document.getElementById("result2").innerHTML = u;


// + operatorunun toplamadan başqa sətr tipli verilənləri birləşdirmək xüsusiyyəti də vardır
var name, surname, text1, num1, num2;
name = "Qara";
surname = "Humbatov"; 
text1 = "Salam";
text1 += ", Qara!"
num1 = 10;
num2 = "20";
document.getElementById("result3").innerHTML = name + " " + surname;
document.getElementById("result4").innerHTML = text1;


// Comparison Operators | Qarşılaşdırma operatorları
// == - bərabərdir | yalnız dəyərlərin bərabərliyi
if (name == surname) {
    console.log("Bərabərdir!");
}
else {
    console.log("Bərabər deyil!");
}

// === - bərabərdir | həm dəyər bərabərliyi, həm tip bərabərliyi
if (name === surname) {
    console.log("Bərabərdir!");
}
else {
    console.log("Bərabər deyil!");
}

// != - bərabər deyil | yalnız dəyərlərin bərabər olmadığını nəzərə alır
// !== - bərabər deyil | həm dəyər bərabərsizliyi, həm tip bərabərsizliyi 
console.clear();
if (num1 != num2) {
    console.log("Bərabərdir!");
}
else {
    console.log("Bərabər deyil!");
}

// > - greater than (daha böyük)
// < - less than (daha kiçik)
// >= - greater than or equal to
// <= - less than or equal to
console.clear();
if (num1 > num2) {
    console.log("True");
}
else {
    console.log("False");
}