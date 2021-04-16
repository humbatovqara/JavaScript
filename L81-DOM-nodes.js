// Lesson 1
/* 
    Parent - child - siblings
    Parent Node - Child Nodes

    - parentNode
    - childNodes[]
    - firstChild
    - lastChild
    - nextSibling
    - previousSibling
*/





// Lesson 2
/*
    innerHTML = firstChild.nodeValue

    - nodeValue
    - nodeType
    - nodeName

    var elementNodes = document.querySelector("#title").childNodes[0].nodeValue;
    var elementNodes = document.querySelector("#title").firstChild.nodeValue;

    var getAtribute = document.querySelector("#head").getAttributeNode("id").nodeName;

    var elementNodes2 = document.querySelector("#p4").childNodes[0].nodeName;
    alert(elementNodes2);
*/





// Lesson 3

// Parent Node
/*
    var elementNodes = document.querySelector("#p4").parentNode;
    alert(elementNodes);
    elementNodes.style.color = "red";
    elementNodes.style.padding = "40px";
    elementNodes.style.backgroundColor = "black";
    elementNodes.style.textAlign = "center";
*/



// Child Nodes, Children
// var elementNodes = document.querySelector("#DivParent").children.length;
/*
    var elementNodes = document.querySelector("#DivParent").children;
    var i;
    for(i = 0; i < elementNodes.length; i++) {
        elementNodes[i].style.color = "red";
    }
    alert(elementNodes);


    var elementNodes = document.querySelector("#DivParent").children[0].firstChild.nodeValue;
    var elementNodes = document.querySelector("#DivParent").children[0].textContent;
    alert(elementNodes);
*/



// First - Last Child
/*
    var elementNodes = document.querySelector("#DivParent").firstElementChild.firstChild; //lastchild
    elementNodes.style.color = "red";
    alert(elementNodes.nodeValue);
*/



// Next - Previous Sbling
var elementNodes = document.querySelector("#head").nextElementSibling;
elementNodes.style.color = "red";
alert(elementNodes.firstChild.nodeValue);