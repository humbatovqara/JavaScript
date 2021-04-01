/*
JavaScript-də 3 tip Popup box var
    1. Alert box - button: OK
    2. Confirm box - buttons: OK/Cancel
    3. Prompt box - fields: textbox/OK/Cancel
*/

var result;
result = document.getElementById("result");

function openBox() {
    // alert("JavaScript");

    /*
    var message;
    if (confirm("Silmək istədiyinizə əminsiniz?") == true) {
        message = "Seçilmiş məlumat silindi";
    } else {
        message = "Seçilmiş məlumat silinmədi";
    }
    result.innerHTML = message;
    */

    var message, getValue;
    getValue = prompt("Dərsin adını daxil edin:","HTML");
    if (getValue == null || getValue == "") {
        message = "Bu sahəni boş buraxa bilmərsiniz!";
    } else if(getValue == "Javascript") {
        message = "Dərsin adını " + getValue + " olaraq daxil etdiniz və doğrudur!";
    } else {
        message = "Bu dərsdə " + getValue + " proqramlaşdırma başa saldım?";
    }
    result.innerHTML = message;
}

// \n - işarəsi alt sətrə keçid