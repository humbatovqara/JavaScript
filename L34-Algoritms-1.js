// Alqoritm
// Tək və cüt sayı tapma
// Faktorial hesablama

function show() {
    /*
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

        var i,
            text1 = "",
            len = langs.length;

         for (; i < len;) {
             text1 += langs[i] + "<br>";
             i++;
        }

        for (i = 0; i < len; i += 3) {
            text1 += langs[i] + "<br>";
            i++;
        }
    */

    var text = "",
        i,
        take,
        faktor = 1;

    // Cüt rəqəmlər
    /*
            for (i = 0; i <= 10; i++) {
                if ((i % 2 == 0)) {
                    text += i + "<br>";
                }
            }
    */

    // Tək rəqəmlər
    /*
    for (i = 0; i <= 20; i++) {
        if ((i % 2) != 0) {
            text += i + "<br>";
        }
    }
*/

    // Faktorial
    take = Number(document.getElementById("takeNumber").value);
    for (i = 1; i <= take; i++) {
        // faktor = faktor * i;
        faktor *= i;
    }

    document.getElementById("result").innerHTML = faktor;
}