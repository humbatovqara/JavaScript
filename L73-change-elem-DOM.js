document.write("Hello world!");
var result = document.getElementById("result");

result.style.background = "black";
result.style.color = "white";
result.style.padding = "16px";

function changePht() {
    // document.querySelector("#picture").src = "../../image/open-light.jpg";
    // document.querySelector("#picture").setAttribute("height","300");
}

function changeCSS() {
    var changeCss, position = 0, speed;
    changeCss = document.querySelector('#move');
    speed = setInterval(repeat,3);
    function repeat() {
        if (position == 450) {
            clearInterval(speed);
        } else {
            position++;
            changeCss.style.top = position + "px";
            changeCss.style.left = position + "px";
        }
    }
}