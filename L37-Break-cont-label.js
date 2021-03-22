// Break - dövrü skip etməyə, dayandırmağa, qırmağa xidmət edir
// Continue - dövrdə bir şərtə keçid etməyə xidmət edir

function show() {
    var takeValue = document.getElementById("take").value;
    var message = "";

    var langs = [
        "C++",
        "C#",
        "HTML5",
        "CSS3",
        "Bootstrap 4",
        "JavaScript ES5",
        "JQuery",
        "React JS",
        "React Native",
        "Node JS",
        "Flutter",
        "MYSql",
        "Mongo DB"

    ]

    // break - 1
    /*
    switch (takeValue) {
        case "JS":
            message = "JavaScript Learn";
            break;
        case "Bugün":
            message = "Bugün günlərdən bayram";
            break;
        default:
            message = "Daxil etdiyiniz ifadənin heç bir qarşılığı yoxdur";
    }
    */

    // break - 2
    /*
    for (i = 0; i < 20; i++) {
        if (i == 5) {
            break;
        }        
        message += "Rəqəm: " + i + "<br>";
    }
    */

    // continue
    /*
    for (i = 0; i < 20; i++) {
        if (i % 2 == 0) {
            continue;
        }        
        message += "Rəqəm: " + i + "<br>";
    }
    */

    // JavaScript kod sətrlərini etiketləmək üçün ifadələrdən qabaq bir etiket adı və : gəlir
    list:{
        message += langs[0] + "<br>";
        message += langs[1] + "<br>";
        message += langs[2] + "<br>";
        message += langs[3] + "<br>";
        message += langs[4] + "<br>";
        message += langs[5] + "<br>";
        message += langs[6] + "<br>";
        break list;
        message += langs[7] + "<br>";
        message += langs[8] + "<br>";
        message += langs[9] + "<br>";
        message += langs[10] + "<br>";
        message += langs[11] + "<br>";
        message += langs[12] + "<br>";
    }

    document.getElementById("result").innerHTML = message;
}