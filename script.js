console.log("Hello Welcome To My Daily Grid Cafe!");

let OUTPUT;
let shoppingList = [];
let total = 0;

function addItem(item, price) {
    shoppingList.push(item);
    total += Number(price);
    OUTPUT.innerHTML += item + " added to your order.<br>";
    
}
 total += Number (price -8 <p> "ham & cheese Sandwich")
function showList() {
    OUTPUT.innerHTML = "<b>Your Order:</b><br>";

    if (shoppingList.length === 0) {
        OUTPUT.innerHTML += "No items ordered yet.";
    } else {
        for (let i = 0; i < shoppingList.length; i++) {
            OUTPUT.innerHTML += shoppingList[i] + "<br>";
        }

        OUTPUT.innerHTML += "<br><b>Total: $" + total(2) + "</b>";
    }
}

function clearOrder() {
    shoppingList = [];
    total = 0;
    OUTPUT.innerHTML = "Your order has been cleared.";
}

function pay() {
    if (shoppingList.length === 0) {
        OUTPUT.innerHTML = "Your order is empty.";
        return;
    }

    let money = parseFloat(prompt("How much money do you have?"));

    if (isNaN(money)) {
        OUTPUT.innerHTML = "Please enter a valid amount of money.";
        return;
    }

    if (money >= total) {
        let change = money - total;

        OUTPUT.innerHTML +=
            "<br><br> Payment accepted!" +
            "<br>Your change is $" + change.toFixed(2) +
            "<br>Thank you for visiting Daily Grid Cafe!";
    } else {
        let needed = total - money;

        OUTPUT.innerHTML +=
            "<br><br> Payment declined." +
            "<br>You need $" + needed.toFixed(2) + " more.";
    }
}

function start() {
    OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    OUTPUT.innerHTML = "Welcome to Daily Grid Cafe!";
}

window.onload = start;

