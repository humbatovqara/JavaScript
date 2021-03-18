// var açar sözü ilə JS dəyişən daxil edilir

var firstName, lastName, x, y, z, age, sum, carName, city = "Baku";
age = 7; //integer
firstName = "Javascript"; //string
carName = false; //boolean

// Dəyişən yenidən təkrar təyin edilərsə dəyərini itirməz
var city;

// Riyazi əməliyyatlar =, +, -, *, /.
sum = (age * 10) / 2;

// Əgər birinci rəqəm, string tipində verilibsə, toplama əməliyyatı deyil, birləşmə əməliyyatı aparır
x = "7"+6+5; //765

/* Əgər əvvəlki rəqəmlər number tipində, sondakı dəyər string tipində olarsa,
 number tipindəkiləri toplayır, daha sonra string olaraq birləşdirir */

x = 7+6+"5"; //135

// String daxilində Dırnağa alma
y = "\"Javascript\" veb proqramlama dilidir";
z = '"Javascript" veb proqramlama dilidir';
document.getElementById("result").innerHTML = x + "<br>" + y + "<br>" + z;