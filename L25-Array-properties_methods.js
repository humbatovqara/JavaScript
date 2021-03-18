var cars = [
    "Mercedes",
    "BMW",
    "Audi",
    "Mitsubishi",
    "Kia",
    "Hyundai"
];

// Dəliklər, boşluqlar
cars[10] = "Ford";
var text, i;
text = "";
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

document.getElementById("result").innerHTML = text;


// JS-də "new Array()" istifadə etməyə ehtiyac yoxdur. Bunun yerinə "[]" istifadə daha doğrudur
/* 
    Dəyişənin bir array olub olmadığını necə bilmək olar?
     - Bilməməyin səbəbi JS operatoru typeof, array-larda "object" göstərir
     + Çünki bir JS array-ı bir obyekt olduğu üçün "object" tip göstərir

     Həlli:
     * ECMAScript 5 (2009) yeni bir Array.isArray() metodu təklif edir
     * Problem, köhnə brauzerlərin ES5-i dəstəkləməməsidi
     * Bu problemi aradan qaldırmaq üçün, öz isArray() funksiyanı yarada bilərik. Beləliklə Obyekt prototipi "Array" sözünə malikdirsə true qaytarır
     * instanceof
*/

// document.getElementById("result1").innerHTML = Array.isArray(cars);
// document.getElementById("result2").innerHTML = cars instanceof Array;
// document.getElementById("result3").innerHTML = isArray(cars);

function isArray(isHave) {
    return isHave.constructor.toString().indexOf("Array") > -1;
}



// Methods
// toString() - Array-ın elementlərini vergüllə ayırır (default belədir)

// join() - Array-ın elementləri bir-birindən ayıran işarəni təyin edir
document.getElementById("result4").innerHTML = cars.join("/");

// pop() metodu - son elementi silir
document.getElementById("result5").innerHTML = cars.pop(); // exit: value
document.getElementById("result6").innerHTML = cars;

// push() metodu - sona element əlavə edir
document.getElementById("result7").innerHTML = cars.push("Chevrolet"); // exit: index number, array length
document.getElementById("result8").innerHTML = cars;

// shift() - öndən elementini silir
document.getElementById("result9").innerHTML = cars.shift(); // exit: value
document.getElementById("result10").innerHTML = cars;