var ID, Btn, resultFalse, resultTrue, odd = 0,
    even = 0,
    result, i, j, z, idTotal = 0;

ID = document.querySelector("#sn");
resultFalse = document.querySelector("#resultFalse");
resultTrue = document.querySelector("#resultTrue");
Btn = document.querySelector("#Btn");

Btn.addEventListener('click', function () {
    for (i = 0; i < 9; i += 2) {
        odd += Number(ID.value[i]);
    }
    odd *= 7;

    for (j = 1; j < 8; j += 2) {
        even += Number(ID.value[j]);
    }
    result = Math.abs(odd - even);

    for (z = 0; z < 10; z++) {
        idTotal += Number(ID.value[z]);
    }

    resultFalse.style.display = "block";
    resultTrue.style.display = "none";
    if (ID.value == "") {
        resultFalse.textContent = "Serial number mustn't space";
    } else if (ID.value.length !== 11) {
        resultFalse.textContent = "Serial number must 11 character";
    } else if (isNaN(ID.value)) {
        resultFalse.textContent = "Serial number must only number";
    } else if (ID.value[0] == 0) {
        resultFalse.textContent = "Serial number mustn't start 0";
    } else if (result % 10 != Number(ID.value[9])) {
        resultFalse.textContent = "It is not Personal ID";
    } else if (idTotal % 10 != Number(ID.value[10])) {
        resultFalse.textContent = "It is not Personal ID";
    } else {
        resultFalse.style.display = "none";
        resultTrue.style.display = "block";
        resultTrue.textContent = "All Done";
    }
});