// Kod sətrləri bir biri ilə nöqtə vergüllə ayrılır. Bu üsul standartlara cavab verir
document.getElementById("result").innerHTML = "Birinci sətr";
document.getElementById("result2").innerHTML = "İkinci sətr";

// Sabitlər
document.getElementById("const").innerHTML = "Sabit dəyərdir";

// Dəyişənlər
var deyisen;
deyisen = "Dəyişən dəyər";
document.getElementById("result3").innerHTML = deyisen;

// Dəyişənlər üzərində riyazi əməliyyatlar aparmaq olur
var x,y,z,n;
x=10;
y=5;
z=2;
n=(x+y)*z;
document.getElementById("result4").innerHTML = n;

// Dəyişən adlarında olar & olmaz
// 1.Underscore
var first_Name, last_Name;

// 2.Upper Camel Case
var FirstName, LastName;

// 3.Lower Camel Case
var firstName, lastName;