var getJS = document.getElementById("externalJS");
getJS.onclick = function () {
    var scriptCreate = document.createElement("script");
    scriptCreate.type = "text/javascript";
    scriptCreate.src = "message.js";
    // document.body.appendChild(scriptCreate);
    // document.getElementsByTagName("head")[0].appendChild(scriptCreate);
}