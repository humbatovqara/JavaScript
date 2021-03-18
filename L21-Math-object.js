function getRandom(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function showResult(p1, p2) {
    document.getElementById("result").innerHTML = getRandom(p1, p2);
}

// show();
function show() {
    // Math.PI - PI sayısını göstərir
    console.log(Math.PI);

    // Math.round() - yuvarlaqlaşdırma əməliyyatı
    var num1 = Math.round(6.7); // yuxarı yuvarlaqlaşdırır, (>=6.5)
    var num2 = Math.round(6.3); // aşağı yuvarlaqlaşdırır, (<6.5)
    console.log(num1);
    console.log(num2);

    // Math.pow() - power, üst
    console.log(Math.pow(4, 2));

    // Math.sqrt() - squad root, kökaltı
    console.log(Math.sqrt(64));

    // Math.abs() - absolute, modul
    var num3 = -70;
    console.log(Math.abs(num3));

    // Math.ceil() - dəyəri, ən yaxın bir üstündəki rəqəmə yuvarlaqlaşdırır
    console.log("Ceil: " + Math.ceil(9.1)); // 10

    // Math.floor() - dəyəri, ən yaxın bir altdakı rəqəmə yuvarlaqlaşdırır
    console.log("Floor: " + Math.floor(9.9)); // 9

    // Math.sin() - verilən dəyərin radian formasından sinusunu göstərir.
    // Radian əvəzinə dərəcə istifadə etmək istəsək çevrilmə etməliyik, bunun üçün radian = dərəcə * Pİ / 180 düsturunda yazmalıyıq
    console.log("Sinus: " + Math.sin(90 * Math.PI / 180));

    // Math.cos() - verilən dəyərin radian formasından cosinusunu göstərir.
    console.log("Cosinus: " + Math.cos(0 * Math.PI / 180));

    // Math.min() and Math.max() - parametrlər siyahısında ən kiçik və ən böyük dəyəri tapmaq üçün istifadə edilir
    console.log("Minimum: " + Math.min(120, 30, -700, -50, 100, 3));
    console.log("Maksimum: " + Math.max(120, 30, -700, -50, 100, 3));
    console.log("Dəyər verilməyən max: " + Math.max());
    console.log("Dəyər verilməyən min: " + Math.min());

    // Math.random() - təsadüfi rəqəm verir
    console.log(Math.random()); //0-1 aralığında

    // Riyazi sabitlər
    console.log(Math.E);
    console.log(Math.PI);
    console.log(Math.SQRT2);
    console.log(Math.SQRT1_2);
    console.log(Math.LN2);
    console.log(Math.LN10);
    console.log(Math.LOG2E);
    console.log(Math.LOG10E);

    // Random üzərində əmliyyatlar
    console.log("Random Tam ədədlər (0-9): " + Math.floor(Math.random() * 10));
    console.log("Random Tam ədədlər (0-99): " + Math.floor(Math.random() * 100));
    console.log("Random Tam ədədlər (1-9): " + Math.floor((Math.random() * 10) + 1));

}