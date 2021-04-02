/*
JavaScript Validation API

    checkValidity() - İnput elementi lazımlı məlumata malikdirsə true dəyərini göstərir
    setCustomValidity() - İnput elementinin validationMessage özəlliyini tənzimləyir
*/

function validateForm() {
    var valueInput,result,message;
    valueInput = document.getElementById("number");
    result = document.getElementById("result");

    if (valueInput.validity.rangeUnderflow) {
        message = valueInput.validationMessage;
    } else {
        message = "Everything OK";
    }
    result.innerHTML = message;
}