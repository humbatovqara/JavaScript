// Form validation
function validateForm() {
    var valueInput,result,message;
    result = document.getElementById("result");
    valueInput = document.getElementById("username").value;

    if (valueInput == "") {
        message = "Username boş buraxıla bilməz!";
    } else if (isNaN(valueInput)) {
        message = "Only number";
    } else if (valueInput < 1 || valueInput > 6) {
        message = "Only 1 < x < 6";
    } else {
        message = "OK!";
    }
    result.innerHTML = message;
}