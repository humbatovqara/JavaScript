// For in loop

function show() {
    var message = "";
    var pc = {
        name: "Asus",
        hddType: "SSD",
        ram: "16 Gb",
        year: 2020
    };

    for(x in pc) {
        message += pc[x] + "-";
    }

    document.getElementById("result").innerHTML = message;
}