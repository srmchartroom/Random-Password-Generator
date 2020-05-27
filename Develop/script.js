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

// Placeholder for the final function result
let pwResult = "";
// Array for selecting random letters    
const arrLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Array for selecting random special characters
const arrSpecial = ["!","\"","#","$","%","&","'","(",")","*","+","-","/","\\",":",";",">","<","=","?","@","[","]","^","_","{","}","|","~"];   



// ** PASSWORD GENERATION FUNCTION ** //

function generatePassword() {   // Create function 'generatePassword();' to run when button clicked
  
  // ** PASSWORD LENGTH: ** //
  
  // Set a var called pwLength to the entered password length from browser prompt
  const pwLength = prompt("Set your Password Length between 8 and 128 characters.");
  // Convert length to a # (since prompt() converts entries to string type)
  parseInt(pwLength);
  console.log("Length: " + pwLength);
  
  // Check for length value < 8 or > 128...
  if (pwLength < 8 || pwLength > 128) {   
    // Return an error alert message if length if true (length is < 8 or > 128)
    alert("Password does not meet the length criteria. Please select the \"Generate Password\" button to try again.");  
    // Display try-again message in the password textarea of writePassword() function
    return "Please try again.";   
  } 
  // if length ok, run rest of function
  else {  
  
  // ** CHARACTER TYPES SELECTION ** //

    /* ---LOWERCASE LETTERS CHARACTER TYPE--- */
    // Set var and assign the confirm() Boolean for lowercase letters
    const pwLower = confirm("Use lowercase letters in the password? Select \"OK\" to use lowercase letters. Select \"Cancel\" to continue.");   
    console.log(""); 
    console.log("Lowercase: " + pwLower);    
  
    /* ---UPPERCASE LETTERS CHARACTER TYPE--- */
    // Set a var and assign the confirm() Boolean for uppercase letters
    const pwUpper = confirm("Use UPPERCASE letters in the password? Select \"OK\" to use UPPERCASE letters. Select \"Cancel\" to continue.");
    console.log("Uppercase: " + pwUpper);   
  
    /* ---NUMBERS CHARACTER TYPE--- */
    // Set a var and assign the confirm() Boolean for numbers
    const pwNum = confirm("Use numbers (e.g. 0, 2, 7, etc.) in the password? Select \"OK\" to use numbers. Select \"Cancel\" to continue.");    
    console.log("Number: " + pwNum);    
     
    /* ---SPECIAL CHARACTERS CHARACTER TYPE--- */
    // Set a var and assign the confirm() Boolean for special characters
    const pwSpecial = confirm("Use special characters (e.g. @, ^, $, etc.) in the password? Select \"OK\" to use special characters. Select \"Cancel\" to continue.");
    console.log("Number: " + pwSpecial);    

  // ** PASSWORD SELECTION SCENARIOS ** //

    /* PASSWORD SELECTION LOGIC
    With a for loop, iterating pwLength times...
    VARIABLES:  pwLower   |   pwUpper   |   pwNum   |   pwSpecial
    Case 1:     TRUE      |   TRUE      |   TRUE    |   TRUE
    Case 2:     TRUE      |   TRUE      |   FALSE   |   FALSE
    Case 3:     TRUE      |   TRUE      |   FALSE   |   TRUE
    Case 4:     TRUE      |   TRUE      |   TRUE    |   FALSE
    Case 5:     TRUE      |   FALSE     |   TRUE    |   TRUE
    Case 6:     TRUE      |   FALSE     |   FALSE   |   FALSE
    Case 7:     TRUE      |   FALSE     |   FALSE   |   TRUE
    Case 8:     TRUE      |   FALSE     |   TRUE    |   FALSE
    Case 9:     FALSE     |   TRUE      |   TRUE    |   TRUE
    Case 10:    FALSE     |   TRUE      |   FALSE   |   FALSE
    Case 11:    FALSE     |   TRUE      |   FALSE   |   TRUE
    Case 12:    FALSE     |   TRUE      |   TRUE    |   FALSE
    Case 13:    FALSE     |   FALSE     |   TRUE    |   TRUE
    Case 14:    FALSE     |   FALSE     |   TRUE    |   FALSE
    Case 15:    FALSE     |   FALSE     |   FALSE   |   TRUE
    Case 16:    FALSE     |   FALSE     |   FALSE   |   FALSE // ERROR HANDLE: MUST SELECT ONE OF THE CRITERIA
    */

    /* ---EMBEDDED FUNCTIONS--- */
    
    // SCENARIO 1: lowercase=T, uppercase=T, numbers=T, special characters=T
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
