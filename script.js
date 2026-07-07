/**************************************
 MAIN CODE
**************************************/

alert("Welcome to my program!");

var userName = prompt("What is your name?");

displayMenu();

/**************************************
 FUNCTIONS
**************************************/

function displayMenu() {

    var pick = prompt(
        "Hello " + userName + "!\n\n" +
        "What do you want today?\n\n" +
        "1. ham and cheese sandwich\n" +
        "2. flat white\n" +
        "3. chocolate cookie\n" +
        "4. hot chocolate"
    );


    if (pick == "1") {
        alert("Thank you, " + userName + "! You ordered ham and cheese sandwich This cost $8.");
    }
    else if (pick == "2") {
        alert("Thank you, " + userName + "! You ordered hot chocolate This cost $4.");
    }
    else if (pick == "3") {
        alert("Thank you, " + userName + "! You ordered flat white This cost $4.");
    }
    else if (pick == "4") {
        alert("Thank you, " + userName + "! You ordered chocolate cookie This cost $5.");
    }
    else {
        alert("Sorry, that is not a valid choice.");
    }
}






































