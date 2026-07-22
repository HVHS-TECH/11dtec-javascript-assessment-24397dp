
    /**************************************
 MAIN CODE
**************************************/

alert("Welcome to my program!");

var userName = prompt("What is your name?");
var userAge = prompt("What is your age?");
var userMoney = prompt("How much money do you have?");

displayMenu();

/**************************************
 FUNCTIONS
**************************************/

function displayMenu() {

    var pick = prompt(
        "Hello " + userName + "!\n\n" +
        "What do you want today?\n\n" +
        "1. Ham and Cheese Sandwich - $8\n" +
        "2. Flat White - $4\n" +
        "3. Chocolate Cookie - $4\n" +
        "4. Hot Chocolate - $5"
    );

    if (pick == "1") {
        alert("Thank you, " + userName + "!\nYou got a Ham and Cheese Sandwich.\nThis costs $8.");
    }
    else if (pick == "2") {
        alert("Thank you, " + userName + "!\nYou got a Flat White.\nThis costs $4.");
    }
    else if (pick == "3") {
        alert("Thank you, " + userName + "!\nYou got a Chocolate Cookie.\nThis costs $4.");
    }
    else if (pick == "4") {
        alert("Thank you, " + userName + "!\nYou got a Hot Chocolate.\nThis costs $5.");
    }
    else {
        alert("Sorry, that is not a valid choice.");
    }
}




































    console.log("Hello Welcome To My Daily Grid Cafe!");

    let OUTPUT;
    let shoppingList = [];
    let total = 0;

    function addItem(item, price) {
        shoppingList.push(item);
        total += Number(price);
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
            OUTPUT.innerHTML += "<br><b>Total: $" + total.toFixed(2) + "</b>";
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
                "<br>Thank you for your order at Daily Grid Café!";
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

