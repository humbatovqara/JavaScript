/* 
    Create Object - Method 1 - static object, Literal
    Sadə bir dəyişən təyin edərək object yaratmaq olar. Bu Literal metod da adlanır. Daxilindəki verilənləri dəyişdirmək olmur statikdir.
*/

var person = {
    firstName: "Qara",
    lastName: "Humbatov",
    age: 20,
    eyeColor: "Brown",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("result").innerHTML =
    person.firstName + "<br>" +
    person.lastName + "<br>" +
    person.age + "<br>" +
    person.eyeColor + "<br>" +
    person.fullName() + "<hr>";



/* 
    Create Object - Method 2 - new
*/

var person1 = new Object();
person1.firstName = "Qara";
person1.lastName = "Humbatov";
person1.age = 20;
person1.eyeColor = "Brown";

document.getElementById("result1").innerHTML =
    person1.firstName + "<br>" +
    person1.lastName + "<br>" +
    person1.age + "<br>" +
    person1.eyeColor + "<br>" + "<hr>"
;



/* 
    Create Object - Method 3 - Constructor
    ECMAScript 5-də bir object, Object.create() funksiyası ilə yaradıla bilər
    Biz yuxarıdakı 2 yaradılış modelində yalnız 1 object yarada bilirik. Lakin 100 object yaratmaq üçün Constructordan istifadə olunur.
*/
function person2(first,last,age,color) {
    this.firstName = first;     // this yerinə burda person2-də yaza bilərdik
    this.lastName = last;
    this.age = age;
    this.eyeColor = color;
}

var myPerson = new person2("Nurlan","Ramazanov","21","Black");
var myPerson2 = new person2("Ulvi","Rafibayli","19","Black");

document.getElementById("result2").innerHTML = myPerson.firstName + " and " + myPerson2.firstName + "<hr>";



/*
    JavaScript-də daxili Contructor-lar
    
*/

var x1,x2,x3,x4,x5,x6,x7,x8;
x1 = new Object();
x2 = new Number();
x3 = new String();
x4 = new Boolean();
x5 = new Array();
x6 = new RegExp();
x7 = new Function();
x8 = new Date();

document.getElementById("result3").innerHTML = 
"x1 = new Object(): " + typeof x1 + "<br>" + 
"x2 = new Number(): " + typeof x2 + "<br>" + 
"x3 = new String(): " + typeof x3 + "<br>" + 
"x4 = new Boolean(): " + typeof x4 + "<br>" + 
"x5 = new Array(): " + typeof x5 + "<br>" + 
"x6 = new RegExp(): " + typeof x6 + "<br>" + 
"x7 = new Function(): " + typeof x7 + "<br>" + 
"x8 = new Date(): " + typeof x8 + "<br>" + "<hr>";

/*
    Person bir object-dirsə, bu ifadə objectin bir kopyası deyil
    var x = person;
    x object-i, person object-inin bir kopyası deyil, hər ikisi eyni object-dir
    x-də edilən dəyişikliklər person-u da dəyişdirəcək
*/