var d = new Date();
console.log(d);
console.log(typeof d);

// Tarixin string olaraq verilməsi
var d1 = new Date("May 21, 2021 14:17:00");
console.log(d1);

// Date object yaratmağın 4 üsulu var:
// 1. new.Date()
// 2. new.Date(milliseconds)
// 3. new.Date(Date String)
// 4. new.Date(year, month, day, hours, minutes, seconds, milliseconds)
var d2 = new Date();
var d3 = new Date(86400000);
var d4 = new Date(90, 4, 25, 13, 30, 20, 0);

console.log(d2);
console.log(d3);
console.log(d4);

// JS-də tarix 1 Yanvar 1970-dən etibarən hesablanır. Bir gün 86.400.000 millisaniyə təşkil edir.
// JS-də aylar 0-dan 11-ə qədər sayır. Yanvar ayı 0, Dekabr ayı 11

// Date object tipini string-ə çevrilməsi
console.log("toString-ə çevrilmiş forması: " + d2.toString());
console.log("toString-ə çevrilmiş forması tipi: " + typeof d2.toString());

// toUTCstring() - metodu tarixi UTC standartına çevirir
console.log("toUTCstring-ə çevrilmiş forması: " + d2.toUTCString());

// toDateString() - metodu, tarixi daha yaxşı oxuna bilən formaya gətirir
console.log("toDateString-ə çevrilmiş forması: " + d2.toDateString());


// JS Date Formats - 4 format var
// ISO Date - "2018-11-15" (The International Standart)
// Short Date - "15/11/2018"
// Long Date - "Nov 15 2018" or "15 Nov 2018"
// Full Date - "Saturday Novamber 30 2017"

// YYYY - MM - DDTHH - MM - SSZ
// T - tarix və saat ayrılması
// UTC saatı Z ilə təyin edilir
var d5 = new Date("2021-03-12T14:45:00Z");
console.log(d5);