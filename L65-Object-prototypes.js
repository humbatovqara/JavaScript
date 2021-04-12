/*
Hər JS objectinin bir prototipi var. Protorip də bir objectdir.
Bütün JS object-ləri, properties və methodlarını prototiplərdən alır.
Object Literal və ya new Object() ilə yaradılan object-lər, Object.prototype adlı prototipdən törəyir.
new Date() ilə yaradılan object-lər Date.prototype objectindən törəyir.

Object.prototype prototip zəncirinin ən üst zirvəsindədir.
Bütün JS object-ləri (Date,Array,RegExp,Function ...) Object.prototype-dən törəyir.

*/

var people;
function Person(first,last,age,color) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = color;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

Person.prototype.hair = "Yellow";
Person.prototype.changeName = function(name) {
    return this.firstName = name;
}

people = new Person("Qara","Humbatov",20,"Brown");
people.changeName("B");
document.getElementById("result").innerHTML = people.firstName;