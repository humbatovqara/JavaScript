go("#result", "https://www.google.com", 7);

function go(ID, Address, second) {
    if (second === 0) {
        window.location.href = Address;
        return;
    }

    document.querySelector(ID).textContent = second + " saniyə sonra yönləndiriləcək";
    second--;
    
    setTimeout(function () {
        go(ID, Address, second);
    }, 1000);
}