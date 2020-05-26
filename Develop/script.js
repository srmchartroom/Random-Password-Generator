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


// **GLOBAL VARIABLES** 
let pwResult = "";    // Setting a placeholder for the final function result
const arrLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];   // Setting up arrays for character type selection: Letters
const arrSpecial = ["!","\"","#","$","%","&","'","(",")","*","+","-","/","\\",":",";",">","<","=","?","@","[","]","^","_","{","}","|","~"];   // Setting up arrays for character type selection: Special Characters

// ** PASSWORD GENERATION FUNCTION **
function generatePassword() {   // Create function 'generatePassword();' to run when button clicked
  // ** PASSWORD LENGTH: **
  const pwLength = prompt("Set your Password Length between 8 and 128 characters.");  // Set a var to entered password length from prompt
  parseInt(pwLength);   // Convert length to a # since prompt() converts entries to string type
  console.log("Length: " + pwLength);
  if (pwLength < 8) {   // Check for length value < 8...
    alert("Password does not meet the length criteria. Please select the \"Generate Password\" button to try again.");  // Return an error alert message if < 8
    return "Please try again.";   // Display try-again message in the password textarea of writePassword() function
  } else if (pwLength > 128) {    // Checking for length value > 128...
    alert("Password does not meet the length criteria. Please select the \"Generate Password\" button to try again.");    // Show the use an error alert.
    return "Please try again.";   // Display try-again message in the password textarea of writePassword() function
  } else {  // if length ok, run rest of function
  
    // ** CHARACTER TYPES SELECTION **
  // Lowercase letters character type:
    const pwLower = confirm("Use lowercase letters in the password? Select \"OK\" to use lowercase letters. Select \"Cancel\" to continue.");   // Set var to confirm() Boolean for lowercase
    console.log(""); 
    console.log("Lowercase: " + pwLower);    
  
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

    /* Password Selection Logic: (for the below, lowercase == "L", uppercase == "U", numbers == "N", special characters == "$")
      SCENARIO 1: L, U, N, $ | SCENARIO 2: L, U, (not N, not $) | SCENARIO 3: L, U, $ (not N) | SCENARIO 4: L, U, N (not $) | SCENARIO 5: L, N, $ (not U) | SCENARIO 6: L (not U, not N, not $) | SCENARIO 7: L, $, (not U, not N) | SCENARIO 8: L, N, (not U, not $) | SCENARIO 9: U, N, $ (not L) | SCENARIO 10: U (not L, not N, not $) | SCENARIO 11: U, $, (not L, not N) | SCENARIO 12: U, N, (not L, not $) | SCENARIO 13: N, $, (not L, not U) | SCENARIO 14: N (not L, not U, not $) | SCENARIO 15: $ (not L, not U, not N) | SCENARIO 16: None */ 

    // SCENARIO 1: L=T, U=T, N=T, $=T
    if (pwLower == true && pwUpper == true && pwNum == true && pwSpecial == true) {
      console.log("SCENARIO 1: lowercase, uppercase, numbers, & special characters");     // Log in the console that console logs after this point are related to scenario 1
      let pwArray = [0];    // Set empty array to hold the random characters as they're generated
      for(var i = 0; i < pwLength; i++) {   // Set for loop to iterate and create random characters until desired pw length is met
        let typeIndex = Math.floor(Math.random() * 4);   // Set a var & assign it to a random number 0-3, where 0 = lower, 1 = Upper, 2 = number, 3 = special char.
        console.log("Random type selected: " + typeIndex);    // Log typeIndex randomly generated to console for checking/errors
        if (typeIndex == 0) {   // Set conditional: if character type randomly selected is lowercase letters...
          let iL = arrLetters[Math.floor(Math.random() * 26)];    // Set a var to be whatever letter in the arrLetters array is at an index position that's randomly generated
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
    } // end of SCENARIO 1

    // SCENARIO 2: L=T, U=T, N=F, $=F
    else if (pwLower == true && pwUpper == true && pwNum !== true && pwSpecial !== true) {
      console.log("SCENARIO 2: lowercase, uppercase, NO numbers, NO special characters");
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
    } // end of SCENARIO 2

    // SCENARIO 3: L=T, U=T, N=F, $=T
    else if (pwLower == true && pwUpper == true && pwNum !== true && pwSpecial == true) {
      console.log("SCENARIO 3: Lowercase, Uppercase, Special Characters - BUT NO NUMBERS");
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
    } // end of SCENARIO 3

    // SCENARIO 4: L=T, U=T, N=T, $=F
    else if (pwLower == true && pwUpper == true && pwNum == true && pwSpecial !== true) {
      console.log("SCENARIO 4: Lowercase, Uppercase, Numbers - BUT NO SPECIAL CHARACTERS");
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
    } // end of SCENARIO 4  
    
    // SCENARIO 5: L=T, U=F, N=T, $=T
    else if (pwLower == true && pwUpper !== true && pwNum == true && pwSpecial == true) {
      console.log("SCENARIO 5: Lowercase, Numbers, Special Characters - BUT NO UPPERCASE LETTERS");
      let pwArray = [0];
      for(var i = 0; i < pwLength; i++) {
        let typeIndex = Math.floor(Math.random() * 3);
        if (typeIndex == 0) {
          let iL = arrLetters[Math.floor(Math.random() * 26)];
          pwArray[i] = iL;
        } else if (typeIndex == 1) {
          let iN = [Math.floor(Math.random() * 10)];
          pwArray[i] = iN;
        } else {
          let iS = arrSpecial[Math.floor(Math.random() * 29)];
          pwArray[i] = iS;
        } 
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");
      console.log("Final Password: " + pwResult);
      return pwResult;
    } // end of SCENARIO 5
    
    // SCENARIO 6: L=T, U=F, N=F, $=F
    else if (pwLower == true && pwUpper !== true && pwNum !== true && pwSpecial !== true) {
      console.log("SCENARIO 6: Lowercase only - NO UPPERCASE, NO NUMBERS, NO SPECIAL CHARACTERS");
      let pwArray = [0];
      for(var i = 0; i < pwLength; i++) {
        let iL = arrLetters[Math.floor(Math.random() * 26)];
        pwArray[i] = iL;
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");
      console.log("Final Password: " + pwResult);
      return pwResult;
    } // end of SCENARIO 6
    
    // SCENARIO 7: L=T, U=F, N=F, $=T
    else if (pwLower == true && pwUpper !== true && pwNum !== true && pwSpecial == true) {
      console.log("SCENARIO 7: Lowercase and Special Characters - NO UPPERCASE, NO NUMBERS");
      let pwArray = [0];
      for(var i = 0; i < pwLength; i++) {
        let typeIndex = Math.floor(Math.random() * 2);
        if (typeIndex == 0) {
          let iL = arrLetters[Math.floor(Math.random() * 26)];
          pwArray[i] = iL;
        } else { 
          let iS = arrSpecial[Math.floor(Math.random() * 29)];
          pwArray[i] = iS;
        }
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");
      console.log("Final Password: " + pwResult);
      return pwResult;
    } // end of SCENARIO 7
    
    // SCENARIO 8: L=T, U=F, N=T, $=F
    else if (pwLower == true && pwUpper !== true && pwNum == true && pwSpecial !== true) {
      console.log("SCENARIO 8: Lowercase and Numbers - NO UPPERCASE, NO SPECIAL CHARACTERS");
      let pwArray = [0];
      for(var i = 0; i < pwLength; i++) {
        let typeIndex = Math.floor(Math.random() * 2);
        if (typeIndex == 0) {
          let iL = arrLetters[Math.floor(Math.random() * 26)];
          pwArray[i] = iL;
        } else { 
          let iN = [Math.floor(Math.random() * 10)];
          pwArray[i] = iN;
        }
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");
      console.log("Final Password: " + pwResult);
      return pwResult;
    } // end of SCENARIO 8
    
    // SCENARIO 9: L=F, U=T, N=T, $=T
    else if (pwLower !== true && pwUpper == true && pwNum == true && pwSpecial == true) {
      console.log("SCENARIO 9: Uppercase, Numbers, and Special Characters - BUT NO LOWERCASE LETTERS");
      let pwArray = [0];
      for(var i = 0; i < pwLength; i++) {
        let typeIndex = Math.floor(Math.random() * 3);
        if (typeIndex == 0) {
          let iU = arrLetters[Math.floor(Math.random() * 26)].toUpperCase();
          pwArray[i] = iU;
        } else if (typeIndex == 1) {
          let iN = [Math.floor(Math.random() * 10)];
          pwArray[i] = iN;
        } else { 
          let iS = arrSpecial[Math.floor(Math.random() * 29)];
          pwArray[i] = iS;
        }
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");
      console.log("Final Password: " + pwResult);
      return pwResult;
    } // end of SCENARIO 9
    
    // SCENARIO 10: L=F, U=T, N=F, $=F
    else if (pwLower !== true && pwUpper == true && pwNum !== true && pwSpecial !== true) {
      console.log("SCENARIO 10: Uppercase only - NO LOWERCASE, NO NUMBERS, NO SPECIAL CHARACTERS");
      let pwArray = [0];
      for(var i = 0; i < pwLength; i++) {
        let iU = arrLetters[Math.floor(Math.random() * 26)].toUpperCase();
        pwArray[i] = iU;
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");
      console.log("Final Password: " + pwResult);
      return pwResult;
    } // end of SCENARIO 10
    
    // SCENARIO 11: L=F, U=T, N=F, $=T
    else if (pwLower !== true && pwUpper == true && pwNum !== true && pwSpecial == true) {
      console.log("SCENARIO 11: Uppercase and Special Characters - NO LOWERCASE, NO NUMBERS");
      let pwArray = [0];
      for(var i = 0; i < pwLength; i++) {
        let typeIndex = Math.floor(Math.random() * 2);
        if (typeIndex == 0) {
          let iU = arrLetters[Math.floor(Math.random() * 26)].toUpperCase();
          pwArray[i] = iU;
        } else { 
          let iS = arrSpecial[Math.floor(Math.random() * 29)];
          pwArray[i] = iS;
        }
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");
      console.log("Final Password: " + pwResult);
      return pwResult;
    } //end of SCENARIO 11
    
    // SCENARIO 12: L=F, U=T, N=T, $=F
    else if (pwLower !== true && pwUpper == true && pwNum == true && pwSpecial !== true) {
      console.log("SCENARIO 12: Uppercase and Numbers - NO LOWERCASE, NO SPECIAL CHARACTERS");
      let pwArray = [0];
      for(var i = 0; i < pwLength; i++) {
        let typeIndex = Math.floor(Math.random() * 2);
        if (typeIndex == 0) {
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
    } // end of SCENARIO 12
    
    // SCENARIO 13: L=F, U=F, N=T, $=T
    else if (pwLower !== true && pwUpper !== true && pwNum == true && pwSpecial == true) {
      console.log("SCENARIO 13: Numbers and Special Characters - BUT NO LOWERCASE LETTERS, NO UPPERCASE LETTERS");
      let pwArray = [0];
      for(var i = 0; i < pwLength; i++) {
        let typeIndex = Math.floor(Math.random() * 2);
        if (typeIndex == 0) {
          let iN = [Math.floor(Math.random() * 10)];
          pwArray[i] = iN;
        } else { 
          let iS = arrSpecial[Math.floor(Math.random() * 29)];
          pwArray[i] = iS;
        }
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");
      console.log("Final Password: " + pwResult);
      return pwResult;
    } // end of SCENARIO 13
    
    // SCENARIO 14: L=F, U=F, N=T, $=F
    else if (pwLower !== true && pwUpper !== true && pwNum == true && pwSpecial !== true) {
      console.log("SCENARIO 14: Numbers only - NO LOWERCASE, NO UPPERCASE, NO SPECIAL CHARACTERS");
      let pwArray = [0];
      for(var i = 0; i < pwLength; i++) { 
        let iN = [Math.floor(Math.random() * 10)];
        pwArray[i] = iN;
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");
      console.log("Final Password: " + pwResult);
      return pwResult;
    } // end of SCENARIO 14
    
    // SCENARIO 15: L=F, U=F, N=F, $=T
    else if (pwLower !== true && pwUpper !== true && pwNum !== true && pwSpecial == true) {
      console.log("SCENARIO 15: Special Characters only - NO LOWERCASE, NO UPPERCASE, NO NUMBERS");
      let pwArray = [0]; 
      for(var i = 0; i < pwLength; i++) {
        let iS = arrSpecial[Math.floor(Math.random() * 29)];
        pwArray[i] = iS;
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");
      console.log("Final Password: " + pwResult);
      return pwResult;
    } // end of SCENARIO 15
    
    // SCENARIO 16: L=F, U=F, N=F, $=F (error scenario; alert an error and to try again)
    else {
      alert("You have not selected any type of characters for your password. Please try again and select at least one type of character to use in your password at a minimum.");
      return "Please try again.";
    } // end of SCENARIO 16
  } // end of else     
} //end of function
