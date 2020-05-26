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

let pwResult = "";    // Setting a placeholder for the final function result
const arrLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];   // Setting up arrays for character type selection: Letters
const arrSpecial = ["!","\"","#","$","%","&","'","(",")","*","+","-","/","\\",":",";",">","<","=","?","@","[","]","^","_","{","}","|","~"];   // Setting up arrays for character type selection: Special Characters

// ** PASSWORD GENERATION FUNCTION ** //

// Create function 'generatePassword();' to run when button clicked.
function generatePassword() {
  
  // ** PASSWORD LENGTH: ** //
  
  const pwLength = prompt("Set your Password Length between 8 and 128 characters.");    // Set a variable to the user-defined password length from prompt.
  parseInt(pwLength);   // Since prompts auto-convert to string, converts length to a #.
  console.log("Length: " + pwLength);   // Logs length to console for checking/errors
  
  // Check if 8 >= pwLength >= 128. Return alert message to redo if not.
  if (pwLength < 8) {   // Checking for < 8. Returns an error alert.
    alert("Password does not meet the length criteria. Please select the \"Generate Password\" button to try again.");    // Show the use an error alert.
    return "Please try again.";   // Show a try-again message in the pw text area.
  } else if (pwLength > 128) {    // Checking for > 128. Returns an error alert.
    alert("Password does not meet the length criteria. Please select the \"Generate Password\" button to try again.");    // Show the use an error alert.
    return "Please try again.";   // Show a try-again message in the pw text area.
  } else {    // Length is OK. Allows the function to continue...

    // ** CHARACTER TYPES SELECTION ** //
    
    // Lowercase letters character type:
    const pwLower = confirm("Use lowercase letters in the password? Select \"OK\" to use lowercase letters. Select \"Cancel\" to continue.");   // Set a variable for lowercase letters to a confirm() message Boolean result
    console.log("");    // Add a space in the console output between length and confirm result
    console.log("Lowercase: " + pwLower);   // Logs Lowercase? T/F confirm result to console for checking/errors
    
    // Uppercase letters character type:
    const pwUpper = confirm("Use UPPERCASE letters in the password? Select \"OK\" to use UPPERCASE letters. Select \"Cancel\" to continue.");   // Set a variable for uppercase letters to a confirm() message Boolean result
    console.log("Uppercase: " + pwUpper);   // Logs Uppercase? T/F confirm result to console for checking/errors
    
    // Numbers character type:
    const pwNum = confirm("Use numbers (e.g. 0, 2, 7, etc.) in the password? Select \"OK\" to use numbers. Select \"Cancel\" to continue.");    // Set a variable for numbers to a confirm() message Boolean result
    console.log("Number: " + pwNum);    // Logs Number? T/F confirm result to console for checking/errors 

    // Special Characters character type:
    const pwSpecial = confirm("Use special characters (e.g. @, ^, $, etc.) in the password? Select \"OK\" to use special characters. Select \"Cancel\" to continue.");    // Set a variable for special chars to a confirm() message Boolean result
    console.log("Number: " + pwNum);    // Logs Number? T/F confirm result to console for checking/errors 

    // ** PASSWORD SELECTION SCENARIOS ** //
    
      /* Password Selection Logic: 
      Scenario 1: pwLower: T, pwUpper: T, pwNum: T, pwSpecial: T
      Scenario 2: pwLower: T, pwUpper: T, pwNum: F, pwSpecial: F
      Scenario 3: pwLower: T, pwUpper: T, pwNum: F, pwSpecial: T
      Scenario 4: pwLower: T, pwUpper: T, pwNum: T, pwSpecial: F
      Scenario 5: pwLower: T, pwUpper: F, pwNum: T, pwSpecial: T
      Scenario 6: pwLower: T, pwUpper: F, pwNum: F, pwSpecial: F
      Scenario 7: pwLower: T, pwUpper: F, pwNum: F, pwSpecial: T
      Scenario 8: pwLower: T, pwUpper: F, pwNum: T, pwSpecial: F
      Scenario 9: pwLower: F, pwUpper: T, pwNum: T, pwSpecial: T
      Scenario 10: pwLower: F, pwUpper: T, pwNum: F, pwSpecial: F
      Scenario 11: pwLower: F, pwUpper: T, pwNum: F, pwSpecial: T
      Scenario 12: pwLower: F, pwUpper: T, pwNum: T, pwSpecial: F
      Scenario 13: pwLower: F, pwUpper: F, pwNum: T, pwSpecial: T
      Scenario 14: pwLower: F, pwUpper: F, pwNum: T, pwSpecial: F
      Scenario 15: pwLower: F, pwUpper: F, pwNum: F, pwSpecial: T
        // Error Handle Scenario 16: Must select 1 character type //
      Scenario 16: pwLower: F, pwUpper: F, pwNum: F, pwSpecial: F  */ 

    // Scenario 1: L=T, U=T, N=T, $=T
    if (pwLower == true && pwUpper == true && pwNum == true && pwSpecial == true) {
      console.log("Scenario 1: lowercase, uppercase, numbers, & special characters");     // Log in the console that console logs after this point are related to scenario 1
      let pwArray = [0];    // Set empty array to hold the random characters as they're generated
      for(var i = 0; i < pwLength; i++) {   // Set for loop to iterate and create random characters until desired pw length is met
        let typeIndex = Math.floor(Math.random() * 4);   // Set a var & assign it to a random number 0-3, where 0 = lower, 1 = Upper, 2 = number, 3 = special char.
        console.log("Random type selected: " + typeIndex);    // Log typeIndex randomly generated to console for checking/errors
        if (typeIndex == 0) {   // Set conditional: if character type randomly selected is lowercase letters...
          let iL = arrLetters[Math.floor(math.random() * 26)];    // Set a var to be whatever letter in the arrLetters array is at an index position that's randomly generated
          pwArry[i] = iL;   // Assign current index position in the password array to the randomly generated and assigned lowercase letter.
        } else if (typeIndex == 1) {    // Set conditional: else if character type randomly selected is uppercase letters...
          let iU = arrLetters[Math.floor(Math.random() * 26)].toUpperCase();    // Set a var to be whatever letter in the arrLetters array is at an index position that's randomly generated (and then capitalize it)
          pwArry[i] = iU;   // Assign current index position in the pw array to the randomly generated (and capitalized)and assigned uppercase letter          
        } else if (typeIndex == 2) {    // Set conditional: else if character type randomly selected is numbers...
          let iN = [Math.floor(Math.random() * 10)];    // Set a var to be a randomly generated number between 0 and 9.
          pwArray[i] = iN;    // Assign current index position in the pw array to the randomly generated number.
        } else {    // Final else conditional: if character type randomly selected is not the others (0-2) - and instead is 3 for special characters...
          let iS = arrSpecial[Math.floor(Math.random() * 29)];    // Set a var to be whatever special character in the arrSpecial array is at the index position that's randomly generated
          pwArray[i] = iS;  // Assign current index position in the pw array to the randomly generation and assigned special character
        }
        console.log("Character " + (i+1) + ": " + pwArray[i]);    // Log the selected character to the console (logged with each iteration of the for.. loop)
      }
      pwResult = pwArray.join("");     // After the for... loop is finished, set the original pwResult variable to be the all the characters in the pw array joined with no separation character (so 1 continuous string)
      console.log("Final Password: " + pwResult);     // log the final password generated to the console
      return pwResult;    // Return the final password result from the function to be assigned as the "password" variable in the writePassword() function
    } // end of scenario 1
    // Scenario 2: L=T, U=T, N=F, $=F
    else if (pwLower == true && pwUpper == true && pwNum !== true && pwSpecial !== true) {
      console.log("Scenario 2: lowercase, uppercase, NO numbers, NO special characters");
      let pwArray = [0];
      for(var i = 0; i < pwLength; i++) {
        let typeIndex = Math.floor(Math.random() * 2);
        if (typeIndex == 0) {
          let iL = arrLetters[Math.floor(Math.random() * 26)];
          pwArray[i] = iL;
        } else {
          let iU = arrLetters[Math.floor(Math.random() * 26)].toUpperCase();
          pwArray[i] = iU;
        }
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");
      console.log("Final Password: " + pwResult);
      return pwResult;
    } // end of scenario 2
    // Scenario 3: L=T, U=T, N=F, $=T
    else if (pwLower == true && pwUpper == true && pwNum !== true && pwSpecial == true) {
      console.log("Scenario 3: Lowercase, Uppercase, Special Characters - BUT NO NUMBERS");
      let pwArray = [0];
      for(var i = 0; i < pwLength; i++) {
        let typeIndex = Math.floor(Math.random() * 3);
        if (typeIndex == 0) {
          let iL = arrLetters[Math.floor(Math.random() * 26)];
          pwArray[i] = iL;  
        } else if (typeIndex == 1) {
          let iU = arrLetters[Math.floor(Math.random() * 26)].toUpperCase();
          pwArray[i] = iU;
        } else if (typeIndex == 2) { 
          let iS = arrSpecial[Math.floor(Math.random() * 29)];
          pwArray[i] = iS;
        }
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");
      console.log("Final Password: " + pwResult);
      return pwResult;
    } // end of scenario 3
    // Scenario 4: L=T, U=T, N=T, $=F
    else if (pwLower == true && pwUpper == true && pwNum == true && pwSpecial !== true) {
      console.log("Scenario 4: Lowercase, Uppercase, Numbers - BUT NO SPECIAL CHARACTERS");
      let pwArray = [0];
      for(var i = 0; i < pwLength; i++) {
        let typeIndex = Math.floor(Math.random() * 3);
        if (typeIndex == 0) {
          let iL = arrLetters[Math.floor(Math.random() * 26)];
          pwArray[i] = iL;
        } else if (typeIndex == 1) {
          let iU = arrLetters[Math.floor(Math.random() * 26)].toUpperCase();
          pwArray[i] = iU;
        } else {
          let iN = [Math.floor(Math.random() * 10)];
          pwArray[i] = iN;
        }
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");
      console.log("Final Password: " + pwResult);
      return pwResult;
    } // end of scenario 4  
    // Scenario 5: L=T, U=F, N=T, $=T

  } // end of else     

} //end of function
