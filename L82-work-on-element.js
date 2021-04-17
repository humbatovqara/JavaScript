// Global variable
var parentDiv = document.querySelector("#DivParent");
var p1 = document.querySelector("#p1");
var p3 = document.querySelector("#p3");



// Add element 1 -  Append Child = Last Element
/*
    function createElementDOM() {
        var p = document.createElement("p");
        var text = document.createTextNode("Javascript");
        
        p.appendChild(text);
        parentDiv.appendChild(p);
    }
*/



// Add element 2 - Other Child
function createElementDOM() {
    var p = document.createElement("p");
    var text = document.createTextNode("Javascript");

    p.appendChild(text);
    parentDiv.insertBefore(p, p3);
}



// Remove element 1 - elementi silmək üçün Parent-ə müraciət edib, onun uşağını silməliyik
// node.remove() metodu - DOM 4 ilə işlədilirdi.
/*
    function removeElementDOM() {
        parentDiv.removeChild(p3);
    }
*/



// Remove element 2
function removeElementDOM() {
    p3.parentNode.removeChild(p3);
}



// Replace element
function replaceElementDOM() {
    var p = document.createElement("p")
    var text = document.createTextNode("New create");
    p.appendChild(text);
    parentDiv.replaceChild(p, p1);
}