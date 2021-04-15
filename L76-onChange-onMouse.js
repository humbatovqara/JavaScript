function changeFunction() {
    var getInput = document.querySelector("#username");
    getInput.value = getInput.value.toUpperCase();
}


// OnMouseOver & OnMouseOut - Method 1
/*
function mOver(obj) {
    obj.src = "../../image/open-light.jpg";
}

function mOut(obj) {
    obj.src = "../../image/close-light.png";
}
*/

// OnMouseOver & OnMouseOut - Method 2
var x = document.querySelector("#picture");
x.onmouseover = function () {
    this.src = "../../image/open-light.jpg";
}
x.onmouseout = function () {
    this.src = "../../image/close-light.png";
}