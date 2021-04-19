"use strict";
var i, x, text = "",
    t = 1;

for (i = 1; i < 14; i++) {
    if (i <= 7) {
        for (x = 1; x <= i; x++) {
            text += x + " ";
        }
    } else if (i > 7) {
        for (x = 1; x < (i - t); x++) {
            text += x + " ";
        }
        t += 2;
    };

    text += "<br>";
};

document.querySelector("#result").innerHTML = text;