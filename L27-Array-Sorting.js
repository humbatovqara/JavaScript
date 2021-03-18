// JS array-da ən yüksək və ya ən kiçik dəyəri tapmaq üçün standart bir funksiya yoxdur
// Sorting - sort()
// sort() - metodu bir array-ı əlifba sırası ilə sıralayır
// sort() - metodu, stringlərdə işə yarayır, number-lərdə işə yaramır
// Rəqəmlər stringlər halında sıralanarsa, "2" dəyəri "1"-dən böyük olduğu üçün, "25","100" dəyərindən böyük qəbul ediləcək
// Bu səbəbdən, sort() metodu number-i sıralayarkən səhv nəticə çıxarır

var names = [
    "Can",
    "Zt",
    "Nm",
    "Rg",
    "Df",
    "Ai",
    "Ko",
    "Sh"
];

var numbers = [45, 100, 1, 8, 17, 30, 11];

// document.getElementById("result").innerHTML = names;
document.getElementById("result").innerHTML = numbers.sort();


// function sortArray() {
//     names.sort();
//     document.getElementById("result2").innerHTML = names;
// }

// reverse() - metodu, array-ın elementlərini tərsinə çevirir
// function sortArray() {
//     names.sort();
//     names.reverse();
//     document.getElementById("result2").innerHTML = names;
// }

// sort() in number type
function sortArray() {
    numbers.sort(function (x, y) {
        return x - y; // sort
        // return y-x; // reverse
    });
    document.getElementById("result2").innerHTML = numbers;
}