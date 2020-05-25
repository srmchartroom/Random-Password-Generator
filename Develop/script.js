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

  // *** PASSWORD LENGTH: **** //
  
  // Set a variable and assign it to the user-defined password length from prompt.
  const pwLength = prompt("Set your Password Length between 8 and 128 characters.")
  
  // Since prompts auto-convert entry to strings, convert the length to a number.
  parseInt(pwLength);

  // Log the entered length to console for checking/error-handling.
  console.log("Length: " + pwLength);
  
  // Check if 8 >= pwLength >= 128. Return alert message to redo if not.
  if (pwLength < 8 || pwLegth > 128) {
    alert("Password does not meet the length criteria. Please select the \"Generate Password\" button to try again.");
    return "Please try again."
  }

  // CHARACTER TYPES:
  // Set up character type confirmations if password length is OK.
      // CODE HERE 

  // PASSWORD RESULTS SCENARIOS:
  // Set up password results scenarios based on character type responses.
      // CODE HERE
  

}