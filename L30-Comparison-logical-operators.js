// Comparison and Logical operators
// Qarşılaşdırma və məntiqi operatorlar
// Bu operatorlar doğru və yalnışı yoxlamaq üçün işlədilir

var x = 7;      //Number
var y = "JavaScript";   //String
var z = false;      //Boolean
var a = 10;

var note=60, message="";

function verify() {

    // == & ===
    document.getElementById("result").innerHTML = 
    'x == 10: ' + (x == 10) + "<br>" +
    'x == "7": ' + (x == "7") + "<br>" +
    'x === "7": ' + (x === "7") + "<br>" + "<hr>" +
    'y == "JS": ' + (y == "JS") + "<br>" + 
    'y == "JavaScript": ' + (y == "JavaScript") + "<br>" + "<hr>" + 
    'z == true: ' + (z == true) + "<br>" + 
    'z == false: ' + (z == false) + "<br>" + "<hr>";

    // != & !==
    document.getElementById("result1").innerHTML = 
    'x != 7: ' + (x != 7) + "<br>" + 
    'x != 5: ' + (x != 5) + "<br>" + 
    'x !== 7: ' + (x !== 7) + "<br>" +
    'x !== 5: ' + (x !== 5) + "<br>" + 
    'x !== "7": ' + (x !== "7") + "<br>" + "<hr>";

    // >    <   >=  <=
    document.getElementById("result2").innerHTML = 
    'x > 8: ' + (x > 8) + "<br>" + 
    'x > 7: ' + (x > 7) + "<br>" + 
    'x > 5: ' + (x > 5) + "<br>" +
    'x >= 8: ' + (x >= 8) + "<br>" + 
    'x >= 7: ' + (x >= 7) + "<br>" + 
    'x >= 5: ' + (x >= 5) + "<br>" + "<hr>" + 
    
    'x < 8: ' + (x < 8) + "<br>" + 
    'x < 7: ' + (x < 7) + "<br>" + 
    'x < 5: ' + (x < 5) + "<br>" +
    
    'x <= 8: ' + (x <= 8) + "<br>" + 
    'x <= 7: ' + (x <= 7) + "<br>" + 
    'x <= 5: ' + (x <= 5) + "<br>" + "<hr>";


    // VƏ,AND - &&
    // VƏ YA, OR - ||
    // NOT - !
    document.getElementById("result3").innerHTML = 
    "x < 9 && a > 9: " + (x < 9 && a > 9) + "<br>" + 
    "x < 9 && a > 11: " + (x < 9 && a > 11) + "<br>" + "<hr>";

    document.getElementById("result4").innerHTML = 
    "x < 9 || a > 9: " + (x < 9 || a > 9) + "<br>" + 
    "x < 9 || a > 11: " + (x < 9 || a > 11) + "<br>" + 
    "x > 9 || a > 11: " + (x > 9 || a > 11) + "<br>" + "<hr>";

    document.getElementById("result5").innerHTML = 
    "x == 9: " + (x == 9) + "<br>" + 
    "!(x == 9): " + !(x == 9) + "<hr>";

    // Şərtli operatorlar yazı forması - 1
    /*
        if (note >= 60) {
            document.getElementById("result6").innerHTML = "Succesfull !";
        } else {
            document.getElementById("result7").innerHTML = "Failure !";
        }
    */

    // Şərtli operatorlar yazı forması - 2
    var result;
    result = note >=60 ? "Succesfull !" : "Failure !";
    document.getElementById("result6").innerHTML = result;


    // String və number comparios olunarkən, JS string-i number-ə çevirir. Yuxarıdakı nümunələrdə
    // Boş string-i 0-a çevirir
    // Number olmayan string müqayisə edilərkən NaN göstərir
    // Number string müqayisə edilərkən ASCII kodlara görə müqayisə olunur. 2 > 12

}
