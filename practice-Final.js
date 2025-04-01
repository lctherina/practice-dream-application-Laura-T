const readline = require('readline-sync'); // used readline-sync for an interactive, dynamic program

let userName = readline.question("Hello! What is your first and last name? "); //VALUES, DATA TYPES, OPERATIONS

let petName = readline.question("Hi, " + userName + "! What is your pet's name? "); // VALUES, DATA TYPES, OPERATIONS: created VARIABLE using camelCase, assigned a VALUE, asked for user input
console.log("We look forward to seeing you and " + petName + "!"); // received input and based on input, created a custom output for the user

const choice = readline.question("Is " + petName + " a dog or a cat? ");
 
if (choice === ("cat" || "Cat")) { // CONTROL STRUCTURE AND LOGIC: used a BOOLEAN and COMPARISON OPERATORS. This allows for the same result whether someone types "cat" in lower case or if they capitalize the C
   console.log("Thank you for making an appointment for your cat, " + petName + "! It will be $30."); // cats have a flat fee of $30. no further info is needed

} else  { // if the user did not enter "cat" or "Cat", the user will be aksed more info about their dog.
    let weight = readline.question("How much does " + petName + " weigh in pounds (lbs)? "); // service for dogs will be priced based on weight

    if (weight <= 40) {
        console.log("Service for your dog, " + petName + ", will be $40. "); // if dog is less than or equal to 40lbs, this will display
    }   else if ((41 <= weight) && (weight <= 80)) {
        console.log("Service for your dog, " + petName + ", will be $60. "); // if dog is in between or equal to 41lbs to 80lbs, this will display
    }   else if (weight >= 81) {
        console.log("Service for your dog, " + petName + ", will be $80. "); // if dog is over or equal to 80lbs, this will display
    }
}    
// The following will display whether you made an appointment for a cat or a dog.
console.log("We look forward to seeing you and " + petName + "! Please plan your visit accordingly:\n1. Please arrive 10 minutes early if you are a new client.\n2. Please park in the lot east of the building.\n3. Please have " + petName + " on a leash or in a carrier when entering the building.\nSee you soon! "); // STRINGING CHARACTERS TOGETHER: used line breaks to display in a list format



// To store customer info, I created a MIXED ARRAY. 

let userInfo = ["Laura Therina", ["Tony", "dog", 45], true]; // BUILDING ARRAYS: shows customer name, pet info in a sub ARRAY including name, type of pet, and weight, and a boolean showing if this is a returning customer
console.log(userInfo);

userInfo.splice(1, 0, ["Murphy", "dog", 90]); // USING ARRAYS: can add a new pet to the existing customer info ARRAY by adding another sub ARRAY using .splice
console.log(userInfo);

for (let i = 0; i < userInfo.length; i++) { // WORKING WITH LOOPS; can use a LOOP to store all the userInfo
    console.log(userInfo[i]);
}