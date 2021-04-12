// Parametr = argument
function multi(x, y) {
    if (y === undefined) {
        y = 1;
    }
    return x * y;
}

function Print(x) {
    document.getElementById("result").innerHTML = x + "<hr>";
}

Print(multi(5)); // Dəyərlərdən biri verilmədikdə NaN cavabı alınır. Bunun qarşısını almaq üçün, default dəyər təyin edilməliyik.

// < ES5 olduqda default dəyəri belə də verə bilərik
function multi1(x, y = 1) {
    return x * y;
}

/*
    Digər dillərdə parametr verildikdə, tipləri də təyin olunmalıdır. JS-də belə bir şey yoxdur.
*/




/*
    Argument sayı
*/
function multi2(x, y = 1) {
    return arguments.length;
}

document.getElementById("result1").innerHTML = multi2(5, 1, 2) + "<hr>";



function showMax() {
    var i, Max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > Max) {
            Max = arguments[i];
        }
    }
    return Max;
}

document.getElementById("result2").innerHTML = showMax(1,100,86,6,19);