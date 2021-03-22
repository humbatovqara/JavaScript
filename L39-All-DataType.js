// Type Conversion
// Number() - Number-ə çevirir
// String() - String-ə çevirir
// Boolean() - Boolean-a çevirir

/*
    Data Type:
    - string
    - number
    - boolean
    - object
    - function

    - null
    - undefined
*/

/*
    Objects:
    - Object
    - Date
    -Array
*/

var x;
document.getElementById("result").innerHTML =
    "JavaScript: " + typeof "JavaScript" + "<br>" +
    "7: " + typeof 7 + "<br>" +
    "3.14: " + typeof 3.14 + "<br>" +
    "NaN: " + typeof NaN + "<br>" +
    "true: " + typeof true + "<br>" +
    "[0,5,10,15]: " + typeof [0, 5, 10, 15] + "<br>" +
    "{name: \"Asus\", ram: \"16 Gb\", HDD: \"SSD\"}: " + typeof {
        name: "Asus",
        ram: "16 Gb",
        HDD: "SSD"
    } + "<br>" +
    "new Date(): " + typeof new Date() + "<br>" +
    "function() {}: " + typeof

function () {} + "<br>" +
"null: " + typeof null + "<br>" +
    "x dəyişəni: " + typeof x + "<br>";