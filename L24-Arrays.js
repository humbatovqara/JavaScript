var langs = ["Javascript", "C++", "C#", "Java", "Swift", "Node JS", "React JS", "Vue JS"];
document.getElementById("result").innerHTML = langs; // Bütün array-ı ekrana çıxarmaq üçün yalnız adını yazmaq kifayətdir

// Array - object-lərin xüsusi bir tipidir. JS-də typeof operatoru array-lar üçün "object" göstərir
console.log(typeof langs);

// Array daxilindəki elementi çağırmaq üçün index (rəqəm) istifadə edir.
console.log(langs[4]);

// Object-də bu fərqlidir. Çağırmaq üçün adından istifadə edilirdi.
var pc = {
    graphicCard: "Nvidia",
    HddType: "SSD",
    processor: "Intel"
};
console.log(pc.processor); //I üsul
console.log(pc["graphicCard"]); //II üsul

// Eyni Array-da fərqli tipdə dəyişənlərə sahib ola bilərik
// - Obyektlərə sahib ola bilərik
// - Funksiyalara sahib ola bilərik
// - Array-lərə sahib ola bilərik

// Array-in uzunluğunu göstərir - length
console.log("Array-ın uzunluğu: " + langs.length);

// Array-ın daxilindəki elementləri çağırmağın "FOR" dövr operatoru istifadə etməkdi
var text, i;
text = "<ul>";
for (let i = 0; i < langs.length; i++) {
    text += "<li>" + langs[i] + "</li>";
}
text += "</ul>";
document.getElementById("result1").innerHTML = text;

// Array-ə element əlavə etməyin ən asan yolu "PUSH" metodunu istifadə etməkdir
function Add() {
    // langs.push("Bootstrap");
    // document.getElementById("result2").innerHTML = langs;

    langs[langs.length] = "MySQL";
    document.getElementById("result2").innerHTML = langs;
}

document.getElementById("result2").innerHTML = langs;