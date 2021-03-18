// Events
// Onload - səhifə yüklənəndə
function message() {
    alert("Mən yükləndim");
}

// Onchange
function change() {
    alert("Dəyişdi");
}

// Onclick
function klik() {
    alert("Düymə klikləndi");
}

// Double Click
function klik2() {
    alert("Düymə iki dəfə klikləndi");
}

// On mouse over
function message2() {
    console.log("Siçan obyektin üzərindədir");
}

// On mouse out
function message3() {
    console.log("Siçan obyektin kənarındadır");
}

// On mouse down
function message4() {
    document.getElementById("result2").style.color = "red";
}

// On mouse up
function message5() {
    document.getElementById("result2").style.color = "green";
}

// On mouse move
function mouseMove(e) {
    var x = e.clientX;
    var y = e.clientY;
    document.getElementById("results").innerHTML = "koordinatlar x: " + x + " " + "koordinatlar y: " + y;
}

// onFocus & onBlur
function Fokus() {
    document.getElementById("key").style.borderColor = "green";
}

function Blur() {
    document.getElementById("key").style.borderColor = "red";
}

// onKeyDown & onKeyPress & onKeyUp
function KeyDown() {
    alert("Klaviş sıxıldı");
}

function KeyPress() {
    alert("Key Press aktivləşdi");
}

// onSelect
function selected() {
    alert("Seçildi!");
}