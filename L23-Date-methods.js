// Date GET methods - dəyişənin göstərilməsi GET ilə, dəyişənin daxil edilməsi SET ilə (çıktı / girdi)
var d = new Date();
var days = [" ", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə", "Bazar"];

console.log("Ayın günü: " + d.getDate()); //getDate() - günü rəqəm olaraq alır
console.log("Həftənin günü: " + d.getDay()); //getDay() - həftənin gününü rəqəm olaraq alır. JS-də həftənin ilk günü 0 (Bazar), son günü 6-dır (Şənbə).
console.log("Ay: " + d.getMonth()); //getMonth() - ayı alır (0-11)
console.log("İl: " + d.getFullYear()); //getFullYear() - ili alır.

console.log("Saat: " + d.getHours()); //getHours() - saatı alır (0-23)
console.log("Dəqiqə: " + d.getMinutes()); //getMinutes() - dəqiqəni alır (0-59)
console.log("Saniyə: " + d.getSeconds()); //getSeconds() - saniyəni alır (0-59)
console.log("Millisaniyə: " + d.getMilliseconds()); //getMilliseconds() - millisaniyəni alır (0-999)

console.log("Zaman: " + d.getTime()); //getTime() - 1 Yanvar 1970-dən etibarən millisaniyə olaraq vaxtı verir

console.log("Həftənin günü convert: " + days[d.getDay()])



// Date SET methods
var d1 = new Date();
d1.setDate("23");

/*
    setDate()
    setFullYear()
    setHours()
    setMilliseconds()
    setMinutes()
    setMonth()
    setSeconds()
    setTime()
*/
document.getElementById("result").innerHTML = d1;

// Yararlı tarix array-ına sahibiksə, Date.parse() üsulu istifadə edərək millisaniyəyə çevirək
var ms = Date.parse("April 21 1970");
console.log("Date.parse(): " + ms);