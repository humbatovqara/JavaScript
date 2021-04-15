function changeText(arg) {
    arg.innerHTML = "Javascript 2";
}


function squareRoot() {
    var getNumber, result;
    getNumber = prompt("Enter number:","0");
    result = Math.sqrt(getNumber);
    document.querySelector("#result").innerHTML = result; 
}


var btn = document.querySelector("#btn");
btn.onclick = squareRoot;
function squareRoot() {
    var getNumber, result;
    getNumber = prompt("Enter number:","0");
    result = Math.sqrt(getNumber);
    document.querySelector("#result").innerHTML = result; 
}

// or

var btn = document.querySelector("#btn");
btn.onclick = function() {
    var getNumber, result;
    getNumber = prompt("Enter number:","0");
    result = Math.sqrt(getNumber);
    document.querySelector("#result").innerHTML = result; 
}