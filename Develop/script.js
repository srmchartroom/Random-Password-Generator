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


// ** PASSWORD GENERATION FUNCTION ** //

// Create function 'generatePassword();' to run when button clicked
function generatePassword() {   

  //----------------------------------------------------------------------------------//
  // **ARRAYS FOR LETTER AND SPECIAL CHARACTER SELECTION** //

  /* Array for selecting random letters */   
  const arrLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    /* Array for selecting random special characters */
  const arrSpecial = ["!","\"","#","$","%","&","'","(",")","*","+","-","/","\\",":",";",">","<","=","?","@","[","]","^","_","{","}","|","~"];

  //----------------------------------------------------------------------------------//
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
  
  //----------------------------------------------------------------------------------//
  // ** CHARACTER TYPES SELECTION ** //
    
    let arrCharType = [];  

    /* ---LOWERCASE LETTERS CHARACTER TYPE--- */
    // Set var and assign the confirm() Boolean for lowercase letters
    const pwLower = confirm("Use lowercase letters in the password? Select \"OK\" to use lowercase letters. Select \"Cancel\" to continue.");
    // if user selects to use lowercase letters...       
    if(pwLower) {
      // push into the next empty index position the value "iLower"
      arrCharType.push("iLower");
    }
    console.log(""); 
    console.log("Lowercase: " + pwLower);
    console.log("arrCharType: " + arrCharType);

    /* ---UPPERCASE LETTERS CHARACTER TYPE--- */
    // Set a var and assign the confirm() Boolean for uppercase letters
    const pwUpper = confirm("Use UPPERCASE letters in the password? Select \"OK\" to use UPPERCASE letters. Select \"Cancel\" to continue.");
    // if user selects to use uppercase letters...
    if(pwUpper) {
      // push into the next empty index position the value "iUpper"
      arrCharType.push("iUpper");
    }
    console.log("");
    console.log("Uppercase: " + pwUpper);
    console.log("arrCharType: " + arrCharType);

    /* ---NUMBERS CHARACTER TYPE--- */
    // Set a var and assign the confirm() Boolean for numbers
    const pwNum = confirm("Use numbers (e.g. 0, 2, 7, etc.) in the password? Select \"OK\" to use numbers. Select \"Cancel\" to continue.");
    // if user selects to use numbers...
    if(pwNum) {
      // push into the next empty index position the value "iNumber"
      arrCharType.push("iNumber");
    }
    console.log("");
    console.log("Number: " + pwNum);    
    console.log("arrCharType: " + arrCharType);

    /* ---SPECIAL CHARACTERS CHARACTER TYPE--- */
    // Set a var and assign the confirm() Boolean for special characters
    const pwSpecial = confirm("Use special characters (e.g. @, ^, $, etc.) in the password? Select \"OK\" to use special characters. Select \"Cancel\" to continue.");
    // if user selects to use special characters...
    if(pwSpecial) {
      // push into the next empty index position the value "iSpecial"
      arrCharType.push("iSpecial");
    }
    console.log("");
    console.log("Special Character: " + pwSpecial); 
    console.log("arrCharType: " + arrCharType);   

    /* --- NO CHARACTER TYPE SELECTED-- */
    // if user does not select any chacter type...
    if(pwLower !== true && pwUpper !== true && pwNum !==true && pwSpecial !== true) {
      // display an error alert requesting they try again...
      alert("You have not selected any type of characters for your password. Please try again and select at least one type of character to use in your password at a minimum.");
      // ...and display "Please try again" in the password text area
      return "Please try again.";
    }

    //----------------------------------------------------------------------------------//
    // ** EMBEDDED FUNCTIONS** //
    
    // Function to generate random lowercase letter
    function generateLower() {
      // set a var "lRandom" to whatever letter is in the randomly generated index position within the arrLetters array
      let lRandom = arrLetters[Math.floor(Math.random() * arrLetters.length)];
      console.log("");
      console.log("lRandom: " + lRandom);
      // then return that randomly generated letter
      return lRandom;
    }

    // Function to generate random uppercase letter
    function generateUpper() {
      // set a var "uRandom" to whatever letter is in the randomly generated index position within arrLetters array, and CAPITALIZE it
      let uRandom = arrLetters[Math.floor(Math.random() * arrLetters.length)].toUpperCase();
      console.log("");
      console.log("uRandom: " + uRandom);
      // then return that randomly generated letter
      return uRandom;
    }

    // Function to generate random number
    function generateNumber() {
      // set a var "nRandom" to a randomly generated number between 0-9
      let nRandom = Math.floor(Math.random() * 10);
      console.log("");
      console.log("nRandom: " + nRandom);
      // then return that randomly generated number
      return nRandom;
    }

    // Function to generate random special character
    function generateSpecial() {
      // set a var "sRandom" to whatever special character is the randomly generated index position with the arrSpecial array
      let sRandom = arrSpecial[Math.floor(Math.random() * arrSpecial.length)];
      console.log("");
      console.log("sRandom: " + sRandom);
      // then return that randomly generated special character
      return sRandom;
    }

    //----------------------------------------------------------------------------------//

    /* FINAL PASSWORD GENERATION & ASSEMBLY */
    // Create an array to hold the final password
    let pwArray = [0];
    // Create a for loop to iterate until the user-selected password length is met
    for(var i = 0; i < pwLength; i++) {
      // set a var "typeIndex" to be a randomly generated number based on the length of the arrCharType array
      let typeIndex = Math.floor(Math.random() * arrCharType.length);
      // if the randomly generated index position holds the value "iLower"...
      if(arrCharType[typeIndex] == "iLower") {
        // ...then run the generateLower() function and assign the randomly generated lowercase letter to the current position in pwArray
        pwArray[i] = generateLower();
      }  
      // else if the randomly generated index position holds the value "iUpper"...
      else if (arrCharType[typeIndex] == "iUpper") {
        // ...then run the generateUpper() function and assign the randomly generated uppercase letter to the current position in pwArray
        pwArray[i] = generateUpper();
      } 
      // else if the randomly generated index position holds the value "iNumber"...
      else if (arrCharType[typeIndex] == "iNumber") {
        // ...then run the generateNumber() function and assign the randomly generated number to the current position in the pwArray
        pwArray[i] = generateNumber();
      } 
      // else if the randomly generated index position holds the value "iSpecial"...
      else if (arrCharType[typeIndex] == "iSpecial") {
        // ...then run the generateSpecial() function and assign the randomly generated special character to the current position in the pwArray
        pwArray[i] = generateSpecial();
      } 
      // Otherwise (a case that should never be reached in this portion of the code)...
      else {
        // ... Log a message to the console for troubleshooting
        console.log("No match.")
      }
      console.log("");
      console.log("Character " + (i+1) + ": " + pwArray[i]);
    }
    // Join all the characters in the pwArray without a separator, and assign the final password string to a new var called "pwResult"
    let pwResult = pwArray.join("");
    console.log("");
    console.log("Final Password: " + pwResult);
    // Finally return the pwResult variable holding the final password string of randomly generated characters to the writePassword() function
    return pwResult;      
  } // end of password length else statement
} //end of function
