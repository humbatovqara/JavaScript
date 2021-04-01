/*
JavaScript ilə işlədiləcək 2 təməl metod bunlardır:
    1. setTimeout (funksiya, millisaniyə): Müəyyən bir millisaniyə gözlədikdən sonra bir prosesi yerinə yetirir
    2. setInterval (funksiya, millisaniyə): setTimeout() ilə eynidir, ancaq funksiyanın yerinə yetirilməsini daimi təkrarlayır

setTimeout() və setInterval(), HTML DOM window objectinin metodlarıdır
İlk parametr yerinə yetiriləcək əməliyyatdır
İkinci parametr yerinə yetirilmədən əvvəl millisaniyə sayını bildirir
*/

var result, times;
result = document.getElementById("result");
times = setInterval(process, 1000);

function process() {
    var data1, data2, resultValue;
    data1 = Number(document.getElementById("data1").value);
    data2 = Number(document.getElementById("data2").value);
    resultValue = data1 * data2;
    result.innerHTML = resultValue;
}