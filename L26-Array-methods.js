// unshift() - array-ın önünə yeni element əlavə edir
// unshift() metodu yeni array uzunluğunu da göstərir

var cars = [
    "Mercedes",
    "BMW",
    "Audi",
    "Mitsubishi",
    "Kia",
    "Hyundai"
];

var cars1 = [
    "Maserati",
    "Ferrari",
    "RR",
    "Bentley"
];

var cars2 = [
    "Ford",
    "Chevrolet",
    "Lincoln"
];

document.getElementById("result").innerHTML = cars.unshift(); //length
var x = cars.unshift("Volkswagen");
document.getElementById("result2").innerHTML = x; //length
document.getElementById("result3").innerHTML = cars;

// Array elementi dəyişdirmə
cars[3] = "Quattro";
document.getElementById("result4").innerHTML = cars;

// Array element silmə
// JS array object olduğundan elementlər JS silmə operatoru işlədilərək silinə bilər
// Lakin bu üsul arrayda "dəlik, boşluq" yaradır. Bu üsul əvəzinə pop() və ya shift() istifadə edin
delete cars[2];
document.getElementById("result5").innerHTML = cars;

// splice() - iki şeyi bir-birinə bağlamaq, əlavə etmə, çıxarma
cars.splice(5, 0, "Changan");
document.getElementById("result6").innerHTML = cars;

// Arrayda "dəliklər, boşluqlar" buraxmadan splice() metodu istifadə edilə bilər
cars.splice(1, 2); //1-ci elementdən sonra 2 dənə element sil
document.getElementById("result7").innerHTML = cars;

// concat() - hazırda olan array-ları birləşdirərək yeni bir array yaradır
// Bu metod mövcud array-i dəyişdirməz, həmişə yeni array yaradır
var cars = cars.concat(cars1, cars2);
document.getElementById("result8").innerHTML = cars;

// slice() - bir array-ı yeni bir array-a ayırır, dilimləyir
// Bu metod mövcud array-dan hər hansı bir elementi silməz, yeni bir array yaradır
// 2 argument ala bilir slice(par1,par2)
var newCars = cars.slice(2); //İlk 2 elementi sildik, dilimlədik
var newCars1 = cars.slice(1, 5); //1-dən 5 daxil olmadan dilimlədi, ayırdı
document.getElementById("result9").innerHTML = newCars;
document.getElementById("result10").innerHTML = newCars1;