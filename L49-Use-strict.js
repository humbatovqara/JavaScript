/* 
    Use Strict - JS kodunun "qatı modda" yazılıcağanı təsdiq edir
    JavaScript 1.8.5-də (ECMAScript version 5) yeni təlimatıdır
    Bu bir ifadə deyil, ancaq JS-in əvvəlki versiyaları tərəfindən görünmür, literal bir ifadədir
    Strict modda - misal üçün təyin edilməmiş dəyişənləri istifadə edə bilmərik

    Use strict (bəkr mod) - bir script və ya funksiyanın başında bəyan edilir
    Use strict - təhlükəsiz, güvənli JS kodu yazmağı asanlaşdırır
    Object yaradan zaman belə, onu təyin etməsək "use strict" ilə xəta çıxarır. Gərək təyin edək

    Use strict modunda - dəyişənin, obyektin və ya funksiyanın silinməsinə icazə verilmir (əgər düzgün təyin edilməyibsə)
    Parametr adının çoxaldılmasına icazə verilmir

    Silinəməz özəlliyin silinməsinə icazə verilməz
*/



// 1. No Use Strict
/*
    x=5;
    document.getElementById("result").innerHTML = x;
*/



// 2. Use Strict   -   ReferenceError
/*
    "use strict";
    x=5;
    document.getElementById("result").innerHTML = x;
*/



// 3. Use Strict
/*
    var x=5;
    document.getElementById("result").innerHTML = x;
*/



// 4. Use Strict - with script | global scope
/*
    "use strict";
    show();
    function show() {
        x = 5;
        document.getElementById("result").innerHTML = x;
    }
*/



// 5. Use Strict - with function | local scope
/*
    y=7;
    show();
    function show() {
        "use strict"
        var x=5;
        document.getElementById("result").innerHTML = x + " " + y;
    }
*/



// 6. Use Strict - Delete operation
/*
    "use strict";
    x = "Javascript";
    delete x;
*/



// 7. Use strict - Parametr name clone
/*
    "use strict";
    x={p1:"JavaScript",p2:10};
    function show(p1,p1) {
        document.getElementById("result").innerHTML = x.p1;
    }
    show();
*/



// 8. Octal literals
/*
    "use strict";
    x = 070;
    document.getElementById("result").innerHTML = x;
*/



// 9. \ symbol
/*
    "use strict";
    var x = \70;
    document.getElementById("result").innerHTML = x;
*/



// 10. "Salt okunur"
/*
    "use strict";
    var obj = {};
    Object.defineProperty(obj,"x",{value:5,writable:false});
    obj.x=10;
    document.getElementById("result").innerHTML = "";
*/



// 11. Sizilənəm özəlliyin silinməsinə icazə verilmir
/*
    "use strict";
    var obj = {};
    delete Object.prototype;
*/



// 12. "Eval" və "arguments" stringi bir dəyişən olaraq təyin edilə bilməz
/*
    "use strict";
    var eval = "JavaScript";
    var argument = "JS";
*/



// 13. with ifadəsinə icazə verilmir
/*
    "use strict"
    with(Math) {
        x = sin(10);
    };
*/



// 14. Təhlükəsizlik səbəbindən, eval() funksiyası çağırıldığı scope-da dəyişənlər yaratmağa icazə verilməz
/*
    "use strict";
    eval("var x=70");
    alert(x);
*/



// Strict modda gələcəkdəki (OOP bölməsi) olan açar sözlərlə işləmək icazə verilmi  -   implements, interface, let, package, private, protected, public, static, yield
/*
    "use strict";
    var public = "Javascript";
    document.getElementById("result").innerHTML = public;
*/