console.log("Hello Welcome To My Daily Grid Cafe!");

let OUTPUT;
let shoppingList = [];

function addItem(item) {
    shoppingList.push(item);

    OUTPUT.innerHTML += item + " added to your order.<br>";
}

function showList() {
    OUTPUT.innerHTML += "<br><b>Your Order:</b><br>";

    for (let i = 0; i < shoppingList.length; i++) {
        OUTPUT.innerHTML += shoppingList[i] + "<br>";
    }
}

function start() {
    OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    OUTPUT.innerHTML = "";
}