// 1. Id
var findElement = document.getElementById('result');
alert(findElement.innerText);



// 2. Name (atribut)
var findElement2 = document.getElementsByName('resultName')
console.log(findElement2[0].innerText);

var message = "", i;
for (i = 0; i < findElement2.length; i++) {
    message += findElement2[i].innerText + "\n";
}
document.getElementById('end').innerText =message;



// 3. Tag
var findElement3 = document.getElementsByTagName('h5');
console.log("findElemet3 - tag: " + findElement3[0].innerText);



// 4. Class (css)
var findElement4 = document.getElementsByClassName('color');
console.log("findElement4 - class: " + findElement4[0].innerHTML);



// 5. QuerySelector & QuerySelectorAll
// QuerySelector - tək elementi verir
// QuerySelectorAll - array şəklində elementləri verir

var findElement5 = document.querySelectorAll('.color');     // hamını çağırı
var findElement6 = document.querySelector('.color1');
var findElement7 = document.querySelector('span.color1');
var findElement8 = document.querySelectorAll('.color');
var findElement9 = document.querySelector('[name=resultName2]');

console.log("findElement5 - queryselectorAll: " + findElement5[1].innerHTML);
console.log("findElement6 - queryselector: " + findElement6.innerHTML);
console.log("findElement7 - queryselector: " + findElement7.innerHTML);
console.log("findElement8 - queryselector: " + findElement8[2].innerHTML);
console.log("findElement9 - queryselector: " + findElement9.innerHTML);