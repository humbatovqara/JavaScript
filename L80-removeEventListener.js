var text = document.querySelector("#text");
text.addEventListener('mousemove', random, false);
function random () {
    document.querySelector("#result").innerText = Math.random();
}

var Btn = document.querySelector("#Btn");
Btn.onclick = function(){
    text.removeEventListener('mousemove',random);
}

if (Btn.addEventListener) {
    Btn.addEventListener("click",mClick,false);
} else if (Btn.attachEvent) {
    Btn.attachEvent("onclick",mClick);
}
function mClick() {
    alert("Old Version Browser");
}

/*
    Köhnə versiya brauzerlər üçün:
    addEventListener = element.attachEvent
    removeEventListener = element.detach
*/