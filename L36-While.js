// While & do While loop operator
// While dövr operatoru təyin edilən bir şərt doğru olduğu müddətcə bir kod blokunu işə sala bilir
// Dövrdə işlədilən dəyişəni artırmağı unudarsaq, dövr heç bir zaman bitməyəcək

function show() {
    var message="", i = 12;
    /*
    while (i < 10) {
        message += i + "<br>"; 
        // i++ yazılmazsa, səhifə çökdü, çünki i həmişə 0 olacaq, heç vaxt 10-dan böyük olmayacaq
        i++;
    }
    */

    do {
        message += i + "<br>";
        i++
    } while (i <= 10);

    document.getElementById("result").innerHTML = message;
}

// Do while və while fərqi
// Do while dövr operatoru, while dövr operatorunun bir versiyasıdır
/*
    Bu dövr, şərtin doğruluğunu yoxlamadan öncə kod blokunu bir dəfə icra edir
    Və şərt doğru olduğu müddətcə dövrü təkrarlayır.
*/