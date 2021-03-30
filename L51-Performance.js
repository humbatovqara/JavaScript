// Performans nə üçün istifadə olunur - JS kodlarını sürətləndirmək üçün
var i = 0;
var num = [24, 100, 45, 7, 57];
var len = num.length;

for (; i < len; i++) {
    document.getElementById("result").innerHTML += num[i] + "<br>";
}

// version 2
var num1 = [24, 100, 45, 7, 57];
var result = document.getElementById("result1");

result.innerHTML = num1[0] + "<br>";
result.innerHTML += num1[1] + "<br>";

// With açar sözünü istifadə etmək sürəti yavaşladır
// Strict modda with açar sözünə icazə verilmir