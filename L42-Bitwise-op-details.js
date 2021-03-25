// Bitwise operation AND
// Hər iki bit bir olduqda 1 cavabı alırıq. Qalan hallarda 0
// AND əməliyyatına vurma kimi düşünə bilərik

document.getElementById("result").innerHTML = (15 & 1);

// Bitwise operation OR
// Bitlərdən biri 1 olduqda 1 cavabı alırıq. Yalnız hər iki tərəf 0 olduqda 0 cavab alınır
// OR əməliyyatını toplama kimi düşünə bilərik
document.getElementById("result1").innerHTML = (15 | 1);

// Bitwise operation XOR
// Bitlərin hər ikisi fərqlidirsə 1 cavabı alırıq. Hər iki tərəf eynidirsə 0 cavab alınır
document.getElementById("result2").innerHTML = (15 ^ 1);
