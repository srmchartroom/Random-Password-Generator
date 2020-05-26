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
  if (pwLength < 8 || pwLength > 128) {   // Check for length value < 8 or > 128...
    alert("Password does not meet the length criteria. Please select the \"Generate Password\" button to try again.");  // Return an error alert message
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
    console.log("Number: " + pwSpecial);    // Logs Number? T/F confirm result to console for checking/errors 
  
    // ** PASSWORD SELECTION SCENARIOS ** //

    /* Password Selection Logic: (for the below, lowercase == "L", uppercase == "U", numbers == "N", special characters == "$")
      SCENARIO 1: L, U, N, $ | SCENARIO 2: L, U, (not N, not $) | SCENARIO 3: L, U, $ (not N) | SCENARIO 4: L, U, N (not $) | SCENARIO 5: L, N, $ (not U) | SCENARIO 6: L (not U, not N, not $) | SCENARIO 7: L, $, (not U, not N) | SCENARIO 8: L, N, (not U, not $) | SCENARIO 9: U, N, $ (not L) | SCENARIO 10: U (not L, not N, not $) | SCENARIO 11: U, $, (not L, not N) | SCENARIO 12: U, N, (not L, not $) | SCENARIO 13: N, $, (not L, not U) | SCENARIO 14: N (not L, not U, not $) | SCENARIO 15: $ (not L, not U, not N) | SCENARIO 16: None */ 

    // SCENARIO 1: L=T, U=T, N=T, $=T
    if (pwLower == true && pwUpper == true && pwNum == true && pwSpecial == true) {
      console.log("Case 1: Lowercase, Uppercase, Numbers, & Special Characters.");
      let pwArray = [0];  // Set empty array to hold random generated characters
      for(var i = 0; i < pwLength; i++) {  // Set for loop to iterate until pw length is met
        let typeIndex = Math.floor(Math.random() * 4);  // Set a var & assign to random number 0-3 (0 = lower, 1 = Upper, 2 = number, 3 = special char)
        console.log("Type Index Randomly Selected: " + typeIndex);
        if (typeIndex == 0) {  // Set conditional if character type randomly selected is lowercase letters...
          let iL = arrLetters[Math.floor(Math.random() * 26)];  // Set var for letter in the arrLetters array at randomly generated index position
          pwArray[i] = iL;  // Assign current index position in password array to the randomly generated letter
        } else if (typeIndex == 1) {  // Set conditional else if character type randomly selected is uppercase letters...
          let iU = arrLetters[Math.floor(Math.random() * 26)].toUpperCase();  // Set a var for letter in the arrLetters array at randomly generated index position and capitalize the letter
          pwArray[i] = iU;  // Assign current index position in password array to the randomly generated (and capitalized) letter
        } else if (typeIndex == 2) {  // Set conditional else if character type randomly selected is numbers...
          let iN = [Math.floor(Math.random() * 10)];  // Set var for a randomly generated number, 0-9
          pwArray[i] = iN;  // Assign current index position in the password array to randomly generated number
        } else {  // Final else conditional for if character type randomly selected is not the others (0-2); instead is 3 for special characters...
          let iS = arrSpecial[Math.floor(Math.random() * 29)];  // Set var for special character in the arrSpecial array at randomly generated index position
          pwArray[i] = iS;  // Assign current index position in the password array to randomly generated special character
        }
        console.log("Character " + (i+1) + ": " + pwArray[i]);
      }
      pwResult = pwArray.join("");  // After for loop finishes, set original pwResult var to  the generated characters in the pwArray (joined as single string, no separation character)
      console.log("Final Password: " + pwResult);
      return pwResult;  // Return final password result to be used in writePassword() function
    }  // end of SCENARIO 1 

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
