/* 
    Functions Advance
    Funksiyanın yazılması - üsul 1:
*/

function multi(x, y) {
    return x * y;
}

function Message() {
    alert("Javascript, Hello World!");
}






/*
    Funksiya həm təyin olunduqdan əvvəl, həm də sonra çağırıla bilər.
    Funksiyanın digər çağırılma üsulu isə, button-a onclick əlavə etməklədir.
    Çağırmaq üçün:
*/

document.getElementById("result").innerHTML = multi(5, 3);





/*
    Funksiyanın yazılması - üsul 2:
    Funksiyanı bir dəyişənə mənimsədə bilərik:
*/
var multi1 = function (x, y) {
    return x * y;
}
document.getElementById("result1").innerHTML = multi1(3, 2);





/*
    Funksiyanın yazılması - üsul 3:
    Funksiyalar, Function () adı verilən daxili JS funksiya yaradıcısı ilə təyin oluna bilər
*/
var multi2 = new Function("x", "y", "return x*y");
document.getElementById("result2").innerHTML = multi2(9, 2);





/*
    Funksiya özünü çağıra bilər:
*/

(function () {
    alert("Funksiya özünü çağırdı");
})();





/*
    Function özü object-dir. Lakin, typeof operatoru ilə nəticə function çıxarır.
*/
/*
    Parametr sayı:
*/

function multi3(x, y) {
    return arguments.length;
}

document.getElementById("result3").innerHTML = multi3(11, 2);





/*
    toString() metodu, funksiyanı tamamilə stringə çevirib göstərir
*/
document.getElementById("result4").innerHTML = multi3.toString();