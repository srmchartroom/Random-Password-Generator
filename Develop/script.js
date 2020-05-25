// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// **GLOBAL VARIABLES** //
// Setting a placeholder for the final function result
let pwResult = "";
// Setting up arrays for character type selection: Letters
const arrLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Setting up arrays for character type selection: Special Characters
const arrSpecial = ["!","\"","#","$","%","&","'","(",")","*","+","-","/","\\",":",";",">","<","=","?","@","[","]","^","_","{","}","|","~"];

// ** PASSWORD GENERATION FUNCTION ** //
// Create function 'generatePassword();' to run when button clicked.
function generatePassword() {

  // PASSWORD LENGTH:
  // Prompt for password length.
      // CODE HERE
  
  // Check if password length is between 8-128 characters, and return alert message to redo if not.
      // CODE HERE

  // CHARACTER TYPES:
  // Set up character type confirmations if password length is OK.
      // CODE HERE 

  // PASSWORD RESULTS SCENARIOS:
  // Set up password results scenarios based on character type responses.
      // CODE HERE
  

}