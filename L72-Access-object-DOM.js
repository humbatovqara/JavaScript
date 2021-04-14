// Access FORM elements with DOM
/*
    function getDOM() {
        var findElement, i, message = "", result;
        findElement = document.forms["frmDOM"];
        for (i = 0; i < findElement.length; i++) {
            message += findElement[i].value + " ";
        }
        result = document.querySelector("#result");
        result.innerHTML = message;
    }
*/



// Access ANCHORS elements with DOM
/*
    alert(document.anchors.length);
    alert(document.anchors[1].innerHTML);
*/



// Access BODY elements with DOM
/*
    alert(document.body.innerHTML); // only body 
    alert(document.head.innerHTML); // only head
    alert(document.documentElement.innerHTML); // head + body
    alert(document.doctype.name);
    alert(document.title);
*/



// Access IMG elements with DOM
/*
    alert(document.images.length);
    alert(document.images[0].alt);
    alert(document.images[1].src);
*/



// Access LINKS elements with DOM
/*
    alert(document.links[2].innerHTML);
    alert(document.links[3].href);
*/

// Access SCRIPTS elements with DOM
alert(document.scripts.length);