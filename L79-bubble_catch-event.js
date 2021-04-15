var Btn = document.querySelector('#Btn');
var result = document.querySelector("#result");
var num1 = 7,
    num2 = 10;

Btn.addEventListener("click", function () {
    process(num1, num2);
});

function process(n1, n2) {
    document.querySelector("#result").innerText = n1 * n2;
}

/*
    window.addEventListener("resize",function(){
        document.querySelector("#result").innerText = Math.random();
    });
*/




var p1, p2, div1, div2;
p1 = document.querySelector("#p1");
p2 = document.querySelector("#p2");
div1 = document.querySelector("#div1");
div2 = document.querySelector("#div2");

p1.addEventListener("click", function () {
    alert("Click on P1");
}, false);

div1.addEventListener("click", function () {
    alert("Click on Div1");
}, false);

p2.addEventListener("click", function () {
    alert("Click on P2");
}, true);

div2.addEventListener("click", function () {
    alert("Click on Div2");
}, true);

// false - iç elementdən çöl elementə doğru
// true - çöl elementdən iç elementə doğru