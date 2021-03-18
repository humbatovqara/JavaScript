var car = "Mercedes"; // Qlobal dəyişən, bu dəyişənlərə funksiya içində çağırmaq olur

// Hər funksiya bir scope yaradır
scope();
scopeTemp();

function scope() {
    var name = "Javascipt"; // Lokal dəyişən, bu dəyişən müxtəlif funksiyalarda istifadə edilə bilər
}

function scopeTemp() {
    var name = "Javascipt"; // Lokal dəyişən, bu dəyişən müxtəlif funksiyalarda istifadə edilə bilər
    alert(car);
}

document.getElementById("result").innerHTML = "";