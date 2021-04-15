var x = document.querySelector("#picture");
var result = document.querySelector("#result");
var demo = document.querySelector("#demo");
var username = document.querySelector("#username");

x.onmousemove = function () {
    x.src = "../../image/open-light.jpg";
}

demo.onmousedown = function () {
    this.style.backgroundColor = "blue";
    this.innerHTML = "Hello";
}

demo.onmouseup = function () {
    this.style.backgroundColor = "green";
    this.innerHTML = "Bye";
}

demo.ondblclick = function () {
    this.style.backgroundColor = "yellow";
    this.style.color = "black";
    this.innerHTML = "Double Click";
}

function Test(arg) {
    arg.style.backgroundColor = "grey";
    arg.style.padding = "12px";
    arg.style.color = "white";
    arg.style.width = "300px";
}

username.onkeydown = function () {
    result.innerHTML = "onkeydown: click keyboard";
}

username.onkeyup = function () {
    result.innerHTML = "onkeyup: up click keyboard";
}

username.onkeypress = function () {
    result.innerHTML = "onkeypress: press  keyboard";
}