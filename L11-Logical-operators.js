var x, y, z;

// && - məntiqi VƏ
x = 5;
y = 52;
z = x + y;

if (x < y && x != y) {
    document.getElementById("result").innerHTML = "Şərt ödəndi";
} else {
    document.getElementById("result").innerHTML = "Şərt ödənmədi";
}

// || - məntiqi VƏ YA
if (x < y || x == y) {
    document.getElementById("result").innerHTML = "Şərt ödəndi";
} else {
    document.getElementById("result").innerHTML = "Şərt ödənmədi";
}

// ! - məntiqi YOX
if (!(x == y)) {
    document.getElementById("result").innerHTML = "Şərt ödəndi";
} else {
    document.getElementById("result").innerHTML = "Şərt ödənmədi";
}

// typeof - dəyərin tipini göstərir
document.getElementById("result").innerHTML = typeof (x);

// instanceof - bir obyekt, obyekt tipinin növüdürsə "true" dəyərini göstərir