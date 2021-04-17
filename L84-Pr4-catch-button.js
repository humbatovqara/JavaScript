var counter = 0,
    obj, xPos, yPos;
obj = document.querySelector("#obj");

obj.onmouseover = function () {
    counter++;
    xPos = parseInt(Math.random() * 1000);
    yPos = parseInt(Math.random() * 700);
    obj.style.left = xPos + "px";
    obj.style.top = yPos + "px";
    obj.style.width = this.clientWidth + 10 + "px";
    obj.style.height = this.clientHeight + 10 + "px";
}

obj.onclick = function () {
    alert(counter + " cəhddə tutdun");
    obj.style.width = "110px";
    obj.style.height = "110px";
    counter = 0;
}