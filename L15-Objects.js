var carName = "Mercedes";

var a = new home();

var car = {
    name: "Mercedes",
    model: "S class",
    color: "black",
    start: function () {
        return this.name + " " + this.model + " işə düşdü.";
    },
    drive: function () {
        return this.name + " " + this.model + " sürülür";
    },
    break: function () {
        return this.name + " " + this.model + " əyləc sıxıldı";
    },
    stop: function () {
        return this.name + " " + this.model + " dayandı";
    }
};



document.getElementById("result").innerHTML = car.start() + "<br>" +
    car.drive() + "<br>" +
    car.break() + "<br>" +
    car.stop();
document.getElementById("result1").innerHTML = car.model;
document.getElementById("result2").innerHTML = car["color"];