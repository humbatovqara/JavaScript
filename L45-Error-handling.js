function errors() {
    var message, inputValue;
    inputValue = document.getElementById("data").value;
    message = document.getElementById("result");
    message.innerHTML = "";

    try {
        if (inputValue == "") throw "Bu sahəni boş buraxa bilmərsiniz!";
        if (isNaN(inputValue)) throw "Bu sahəyə rəqəm yazmalısınız!";
        inputValue = Number(inputValue);
        if (inputValue < 5) {
            throw "Yazılan rəqəm 5-dən kiçik ola bilməz!";
        }
        else if (inputValue > 15) {
            throw "Yazılan rəqəm 15-dən böyük ola bilməz!";
        }
    } catch (error) {
        message.innerHTML = error;
    } finally {
        document.getElementById("data").value = "";
    }
}