// Boolean Data Type - true / false
var x = true;
var y = false;
var a;  //undefined
var b = 7/"JS";     //NaN

function verify() {
    document.getElementById('result').innerHTML = x + " " + y;
    document.getElementById('result1').innerHTML = Boolean(7 > 61);

    document.getElementById('result2').innerHTML = 
    "Boolean(number,integer): " + Boolean(700) + "<br>" +
    "Boolean(number,double): " + Boolean(3.14) + "<br>" +
    "Boolean(number,negative): " + Boolean(-70) + "<br>" +
    "Boolean(string): " + Boolean("JavaScript") + "<br>" +
    "Boolean('boolean'): " + Boolean("true"); 

    document.getElementById('result3').innerHTML = 
    "Boolean(0): " + Boolean(0) + "<br>" +
    "Boolean(0,negative): " + Boolean(-0) + "<br>" +
    "Boolean(string): " + Boolean("") + "<br>" +
    "Boolean(null): " + Boolean(null) + "<br>" +
    "Boolean(false): " + Boolean(false) + "<br>" +
    "Boolean(undefined): " + Boolean(a) + "<br>" +
    "Boolean(NaN): " + Boolean(b);
    
    // Obyect qarşılaşdırıla bilməz - dəyərləri bilinmir
}