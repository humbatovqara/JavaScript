function person(first,last,age,color) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = color;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
    this.changeName = function (name) {
        return this.firstName = name;
    }
};

var people = new person("Qara","Humbatov",20,"Brown");

document.getElementById("result").innerHTML = 

// Method 1
people.eyeColor + "<br>" + "<hr>" +

// Method 2
people["firstName"] + "<br>" + "<hr>";

// Method 3
var x = "lastName";
document.getElementById("result1").innerHTML = people[x] + "<br>" + "<hr>";

// Method 4 - All
var message = "",a;
for (a in people) {
    message += people[a] + "<br>";
}
document.getElementById("result2").innerHTML = message + "<br>" + "<hr>";


// Metod üzərində proseslər
// əlavə etmə
people.hair = true;         // People object-ə xüsusiyyət əlavə etmək
document.getElementById("result3").innerHTML = people.hair  + "<br>" + "<hr>";

// silmə
delete people.eyeColor;
var message2 = "",ab;
for (b in people) {
    message2 += people[b] + "<br>";
}
document.getElementById("result4").innerHTML = message2 + "<br>" + "<hr>";


// Metodları çağırma
// Metod, object-lərin daxilindəki funksiyalara deyilir
document.getElementById("result5").innerHTML = people.fullName() + "<br>" + "<hr>";

// changeName()
people.changeName("A");
document.getElementById("result6").innerHTML = "changeName(): " + people.firstName;