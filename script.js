console.log("Hello Welocome To My Daily Grid Cafe!")
/*****************************
****************************/
console.log("Task 16");
console.log("Daniel");

let OUTPUT;
let shoppingList = [];

/**********************
Functions
**********************/

function addItem() {

    let item = document.getElementById("itemInput").value;

    shoppingList.push(item);

    OUTPUT.innerHTML += "You have added " + item + " to the list <br>";

}

function showList() {
 OUTPUT.innerHTML += "<br>These are the items on your shopping list:<br>";
     OUTPUT.innerHTML +="<br>Egg sandwich $8</br>"
     OUTPUT.innerHTML +=""
     OUTPUT.innerHTML +=""
     OUTPUT.innerHTML +=""
    OUTPUT.innerHTML += "<br>Chocolate cookie $5</br>"
    OUTPUT.innerHTML +="<br>Cappuccino $4</br>"
    OUTPUT.innerHTML +="<br>Flat white $4</br>"
    OUTPUT.innerHTML +="<br>Hot chocolate $4</br>"
    OUTPUT.innerHTML +="<br>Water $3</br>"
    OUTPUT.innerHTML +="<br>Orange juice $4</br>"
    OUTPUT.innerHTML +="<br>strawberry milk shake$5</br>"
    


    for (let i = 0; i < shoppingList.length; i++) {

        OUTPUT.innerHTML += shoppingList[i] + "<br>";

    }

}

function start() {

    OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    OUTPUT.innerHTML = "";

}