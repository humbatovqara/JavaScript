// For dövr operatoru
// For operatoru - bir kod blokunu dəfələrlə işlədə bilmək üçün istifadə olunur
/*
    JavaScript fərqli dövr operatorlarına malikdir
    1. for
    2. for/in
    3. while
    4. do/while
*/


function show() {
    var i, text = "",
        text1 = "";

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

    for (i = 1; i <= 10; i++) {
        text += i + "<br>";
    }

    for (i = 0; i < langs.length; i++) {
        text1 += langs[i] + "<br>";
    }

    document.getElementById("result").innerHTML = text1;
}