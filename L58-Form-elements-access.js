function printScreen() {
    var valueForm, result;
    result = document.getElementById("result"); 
    
    // valueForm = document.forms[0];  // Bir neçə form ola bilər
    
    // valueForm = document.forms[0].length;    // Form-da neçə element varsa onların sayı (uzunluğu)
    
    // valueForm = document.forms[0].username.value;   // Form-un elementinə ilk access üsulu
    
    // valueForm = document.formBegin.pass.value;  // Form-un elementinə ikinci access üsulu
    
    // valueForm = document.formBegin.username.name;
    
    // valueForm = document.forms[0].elements[0],value;  // Form-un elementinə üçüncü access üsulu
    
    // valueForm = document.getElementById("username").value;  // Form-un elementinə dördüncü access üsulu

    valueForm = document.forms["formBegin"]["username"].value;   // Form-un elementinə beşinci access üsulu

    result.innerHTML = valueForm;
}