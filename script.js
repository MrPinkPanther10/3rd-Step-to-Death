// Assignment code here
// User input variables: 
var enter;
var randomNumber;
var randomSymbol;
var randomUpper;
var randomLower;
// Start Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];

var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// Uppercase conversion
uppercase = lowercase.map(toUpper);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  gen = generatePassword();
  document.querySelector("#generate").placeholder = gen
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("How many characters for your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("You need to input a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        randomNumber = confirm("Will it contain numbers?");
        randomSymbol = confirm("Will it contain special characters?");
        randomUpper = confirm("Will it contain Uppercase letters?");
        randomLower = confirm("Will it contain Lowercase letters?");
    };

    // 4 negative options
    if (!randomSymbol && !randomNumber && !randomUpper && !randomLower) {
        choices = alert("You must choose a criteria!");

    }
    // Else if for 4 positive options
    else if (randomSymbol && randomNumber && randomUpper && randomLower) {

        choices = character.concat(number, lowercase, uppercase);
    }
    // 3 positive options
    else if (randomSymbol && randomNumber && randomUpper) {
        choices = character.concat(number, uppercase);
    }
    else if (randomSymbol && randomNumber && randomLower) {
        choices = character.concat(number, lowercase);
    }
    else if (randomSymbol && randomLower && randomUpper) {
        choices = character.concat(lowercase, uppercase);
    }
    else if (randomNumber && randomLower && randomUpper) {
        choices = number.concat(lowercase, uppercase);
    }
    // 2 positive options 
    else if (randomSymbol && randomNumber) {
        choices = character.concat(number);

    } else if (randomSymbol && randomLower) {
        choices = character.concat(lowercase);

    } else if (randomSymbol && randomUpper) {
        choices = character.concat(uppercase);
    }
    else if (randomLower && randomNumber) {
        choices = lowercase.concat(number);

    } else if (randomLower && randomUpper) {
        choices = lowercase.concat(uppercase);

    } else if (randomNumber && randomUpper) {
        choices = number.concat(uppercase);
    }
    // 1 positive option
    else if (randomSymbol) {
        choices = character;
    }
    else if (randomNumber) {
        choices = number;
    }
    else if (randomLower) {
        choices = lowercase;
    }
    // Created space variable to fill uppercase conversion
    else if (randomUpper) {
        choices = space.concat(uppercase);
    };
