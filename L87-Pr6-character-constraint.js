var message, result, chracter = 150,
    chracterLength;
message = document.querySelector("#message");
result = document.querySelector("#result");

message.onkeydown = chracterControl;
message.onkeyup = chracterControl;

function chracterControl() {
    chracterLength = this.value.length;
    if (chracter >= chracterLength) {
        var lastLength = chracter - chracterLength;
        result.textContent = lastLength + " simvol qaldı";
    } else {
        this.value = this.value.substr(0, chracter);
    }
}