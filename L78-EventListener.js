var Btn = document.querySelector("#Btn");
var result = document.querySelector("#result");


// Method 1
/*
    Btn.addEventListener("click",showDate);
    function showDate() {
        result.innerHTML = "<span>" + Date() + "</spam>";
    }
*/


// Method 2
/*
    Btn.addEventListener("click",function() {
        result.innerHTML = "<span> Method 2 </spam>";
    });
*/


// Method 3 - real EventListener
Btn.addEventListener("click",mClick);
Btn.addEventListener("click",mOtherClick);
Btn.addEventListener("mouseover",mOver);
Btn.addEventListener("mouseout",mOut);

/*
    function mClick() {
        alert("This is first");
    }

    function mOtherClick() {
        alert("This is second");
    }
*/

function mClick() {
    result.innerText = "This is onClick";
}

function mOver() {
    result.innerText = "This is onMouseOver";
}

function mOut() {
    result.innerText = "This is onMouseOut";
}