// Funksiya çağırmağın ilk üsulu | özü-özünü çağırır
// İkinci üsulu isə düymə vasitəsilə çağırmaq

show();
// Statik funksiya
function show() {
    // window.alert("Funksiya mesaj çağırdı");
}



// Dinamik funksiya - 1
function sum(par1, par2) {
    alert(par1 + par2);
}
// sum(5,2);
// sum(18,32);



// Dinamik funksiya - 2 | Return istifadəsi
function toplam(par3, par4) {
    return par3 + par4;
}
// document.getElementById("result").innerHTML = toplam(8,5)/4;



// Function - temperature convert
function toCelcius(x) {
    return (5 / 9) * (x - 32);
}
document.write(toCelcius(59));

function getName(name, surname) {
    return name + " " + surname;
}
document.write(getName("Qara", "Humbatov"));



// Bir funksiyadan digər funksiyaya keçid
function ferq(data1, data2) {
    return data1 - data2;
}

function hesabla(pr1, pr2) {
    return ferq(pr1, pr2) * ferq(pr1, pr2);
}

function printScreen(par) {
    document.write(par + "<br>");
}
printScreen(hesabla(4, 2));
printScreen(hesabla(8, 1));
printScreen(hesabla(6, 3));
printScreen(hesabla(5, 1));
printScreen(hesabla(9, 4));