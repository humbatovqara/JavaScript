// Hoisting - yuxarı qaldırmaq, çəkmək
// JS-də bir dəyişəni istifadə edib sonra onu təyin edə bilərik. Başqa sözlə bir dəyişən təyin edilmədən öncə istifadə edilə bilər

var message;
x = 7;
message = document.getElementById("result");
message.innerHTML = x;
var x;

var a;
a = 5;
y = 6;
message = document.getElementById("result1");
message.innerHTML = a + ":" + y;
var y;

// Hoisting təyin etmək üçün istifadə olunan zaman dəyişəni yuxarı qaldırmış sayır, lakin "atama" əməliyyatı üçün yox