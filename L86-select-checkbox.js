var Btn1 = document.querySelector("#Btn1");
var Btn2 = document.querySelector("#Btn2");
var getIndex = document.querySelector("#city");

Btn1.addEventListener("click", function () {
    // var valueSelected = getIndex.options[getIndex.selectedIndex].value;
    var valueSelected = getIndex.options[getIndex.selectedIndex].text;
    alert(valueSelected);
});

var control = document.querySelector("#accept");
Btn2.addEventListener("click", function () {
    if(!(control.checked)){
        alert("Please read privacy policy");
    }
});