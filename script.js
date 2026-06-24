console.log("Hello Welcome To My Daily Grid Cafe!");

let OUTPUT;
let shoppingList = [];

function addItem(item) {
    shoppingList.push(item);

    OUTPUT.innerHTML += item + " added to your order.<br>";
}

function showList() {
    OUTPUT.innerHTML = "<b>Your Order:</b><br>";

    if (shoppingList.length === 0) {
        OUTPUT.innerHTML += "No items ordered yet.";
    } else {
        for (let i = 0; i < shoppingList.length; i++) {
            OUTPUT.innerHTML += shoppingList[i] + "<br>";
        }
    }
}

function clearOrder() {
    shoppingList = [];
    OUTPUT.innerHTML = "Your order has been cleared.";
}

function pay() {
    if (shoppingList.length === 0) {
        OUTPUT.innerHTML = "Your order is empty.";
    } else {
        OUTPUT.innerHTML += "<br><br>Thank you for your payment! Your order is being prepared.";
    }
}

function start() {
    OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    OUTPUT.innerHTML = "Welcome to Daily Grid Cafe!";
}