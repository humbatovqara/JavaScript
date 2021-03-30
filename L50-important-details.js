// Important details | JS Best Practies

// 1. Global dəyişənlərdən mümkün qədər istifadə etməyin. Bura bütün verilən tipləri, object və function daxildir. Local dəyişənlər var açar sözü ilə bildirilməlidir, əks halda global kimi qəbul edilir.
// Dəyişənləri bildirdikdə ən üstdə yazmaq, bildirdikdən sonra nə isə mənimsətmək isə həmən ardınca etmək yaxşı kod yazmaqdır.
// False version
var x;

function show() {
    return x * x;
}

// True version
function show() {
    var x;
    return x * x;
}

// True version - dəyişən təyin edib mənimsətmə
var x = 7,                              // x = new Number(7);
    y = "JS",                           // y = new String("JS");
    z = false,                          // z = new Boolean(false);
    t = /()/g,                          // new RegExp{};
    name = ["React","Angular","Node"],  // name = new Array();
    obj = {p1:"Vue Js",p2:"Dino Js"},   // obj = new Object{};

    func = function(){}                 // new Function();
;

// Hər zaman Number, String və ya Booleanları ilkin verilən tipi olaraq istifadə edin. Object olaraq deyil. Object olaraq bildirmək sürəti yavaşladır
// Number verilən tipinin səhvən string-ə və ya NaN-a çevrilə biləcəyinə diqqət edin
// JS-də verilən tipi dəyişə bilər, buna diqqət edin



// 2. New açar sözündən qaçın

// 3. "==" ifadəsindən qaçın. Yəni mənimsətmə operatoru "=" ilədir, "==" deyil. Bərabərlik mənasında isə daha doğru istifadə "===" operatorudur.



// 4. eval() funksiyasından qaçın - daxilində kod işlətmə bacarığına görə təhlükəsizlik baxımından istifadəsi məsləhət görülmür.

// 5. String-dən string çıxmağa çalışsaq NaN cavabı alacağıq
document.getElementById("result").innerHTML = "JS" - "js";