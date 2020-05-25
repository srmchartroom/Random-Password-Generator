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

let pwResult = "";  // Setting a placeholder for the final function result
const arrLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];  // Setting up arrays for character type selection: Letters
const arrSpecial = ["!","\"","#","$","%","&","'","(",")","*","+","-","/","\\",":",";",">","<","=","?","@","[","]","^","_","{","}","|","~"];  // Setting up arrays for character type selection: Special Characters

// ** PASSWORD GENERATION FUNCTION ** //

// Create function 'generatePassword();' to run when button clicked.
function generatePassword() {
  
  // ** PASSWORD LENGTH: ** //
  
  const pwLength = prompt("Set your Password Length between 8 and 128 characters."); // Set a variable to the user-defined password length from prompt.
  parseInt(pwLength); // Since prompts auto-convert to string, converts length to a #.
  console.log("Length: " + pwLength); // Logs length to console for checking/errors
  
  // Check if 8 >= pwLength >= 128. Return alert message to redo if not.
  if (pwLength < 8) { // Checking for < 8. Returns an error alert.
    alert("Password does not meet the length criteria. Please select the \"Generate Password\" button to try again."); // Show the use an error alert.
    return "Please try again."; // Show a try-again message in the pw text area.
  } else if (pwLength > 128) { // Checking for > 128. Returns an error alert.
    alert("Password does not meet the length criteria. Please select the \"Generate Password\" button to try again."); // Show the use an error alert.
    return "Please try again."; // Show a try-again message in the pw text area.
  } else { // Length is OK. Allows the function to continue...

    // ** CHARACTER TYPES SELECTION ** //
    
    // Lowercase letters character type:
    const pwLower = confirm("Use lowercase letters in the password? Select \"OK\" to use lowercase letters. Select \"Cancel\" to continue."); // Set a variable for lowercase letters to a confirm() message Boolean result
    console.log(""); // Add a space in the console output between length and confirm result
    console.log("Lowercase: " + pwLower); // Logs Lowercase? T/F confirm result to console for checking/errors
    
    // Uppercase letters character type:
    const pwUpper = confirm("Use UPPERCASE letters in the password? Select \"OK\" to use UPPERCASE letters. Select \"Cancel\" to continue."); // Set a variable for uppercase letters to a confirm() message Boolean result
    console.log("Uppercase: " + pwUpper); // Logs Uppercase? T/F confirm result to console for checking/errors
    
    // Numbers character type:
    const pwNum = confirm("Use numbers (e.g. 0, 2, 7, etc.) in the password? Select \"OK\" to use numbers. Select \"Cancel\" to continue."); // Set a variable for numbers to a confirm() message Boolean result
    console.log("Number: " + pwNum); // Logs Number? T/F confirm result to console for checking/errors 

    // Special Characters character type:
    const pwSpecial = confirm("Use special characters (e.g. @, ^, $, etc.) in the password? Select \"OK\" to use special characters. Select \"Cancel\" to continue."); // Set a variable for special chars to a confirm() message Boolean result
    console.log("Number: " + pwNum); // Logs Number? T/F confirm result to console for checking/errors 

    // ** PASSWORD SELECTION SCENARIOS ** //



  }

  // CHARACTER TYPES:
  // Set up character type confirmations if password length is OK.
      // CODE HERE 

  // PASSWORD RESULTS SCENARIOS:
  // Set up password results scenarios based on character type responses.
      // CODE HERE
  

}