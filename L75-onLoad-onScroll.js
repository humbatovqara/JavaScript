// onLoad - Method 1
function checkCookies() {
    var message="";
    if(navigator.cookieEnabled == false) {
        message = "Cookie is not enabled";
    } else {
        message = "Cookie active";
    }
    alert(message);
}


// onLoad - Method 2
window.onload = function () {
    var obj = document.querySelector("#result");
    obj.style.color = "red";
    obj.innerHTML = "Javascript";
    obj.style.fontSize = "32px";
}

/*
    window.onLoad - əsas özəlliyi ondan ibarətdir ki, biz result başlığını təyin etməzdən öncə, onu obj dəyərinə mənimsədim, CSS dəyişmək istəsək
    heç bir hadisə reallaşmayacaq. Bu səbəb, kod sətrinin yuxarıdan aşağıya oxunduğu zaman, hələ result id-li başlığı görmədiyindən, tanımadığından
    onun CSS-i dəyişdirə bilmir. Bu prosesin qarşısını almaq üçün, yəni, elementi yazmazdan öncə onun üzərində dəyişiklik aparmaq üçün ONLOAD istifadə
    olunur.
*/


// onUnLoad - ifadəsi yeni brauzerlərdə düzgün işləmədiyindən, demək olar ki istifadə olunmur
function myFunction() {
    alert("exit Browser");
}


// onScroll
var x = 0;
function myFunction1 () {
    document.querySelector("#result1").innerHTML = x++;
}