# Random-Password-Generator

Javascript-based random password generator that takes password parameters and preferences from the user on click of a button and returns a random password between 8 and 128 characters in length according to the number specified by the user, and containing Uppercase letters, lowercase letters, numbers, and special characters as indicated by the user's noted preference.

## Password Criteria & Application Methodology

  - Passwords must be between 8 and 128 characters long:
      - With a **prompt();** the browser window requests a preferred password length.
      - A conditional evaluates the password length entered, and if it doesn't meet the criteria, the browser alerts to the user that the password length is not acceptable and requests that they attempt to generate a password again.

  -  Passwords can take lowercase letters, UPPERCASE letters, numbers, and special characters - determined through users responses to browser **confirm();** messages.
      - Letters: Letters are assigned from a single lowercase array of the alphabet (length of 26).
          - Includes: **a** , **b** , **c** , **d** , **e** , **f** , **g** , **h** , **i** , **j** , **k** , **l** , **m** , **n** , **o** , **p** , **q** , **r** , **s** , **t** , **u** , **v** , **w** , **x** , **y** , **z**.
          - If the user selects that they want lowercase letters, a random index is selected and a lowercase letter is chosen from the array.
          - If the user selects that they want uppercase letters, a random index is selected and a lowercase letter is chosen from the array and converted to UPPERCASE with the **.toUpperCase();** method.

      - Numbers: Numbers are assigned from random number generation.
          - If the user selects that they want to use numbers in their password, a random number is generated (0-9) using **Math.floor(Math.random() * 10**.

      - Special Characters: Special characters are assigned from a single array of 29 special characters following Oracle's password criteria for special characters. See [https://www.owasp.org/index.php/Password_special_characters](https://www.owasp.org/index.php/Password_special_characters).
          - Includes: **!** , **"** , **#** , **$** , **%** , **&** , **'** , **(** , **)** , ***** , **+** , **-** , **/** , **\** , **:** , **;** , **>** , **<** , **=** , **?** , **@** , **[** , **]** , **^** , **_** , **{** , **}** , **|** , **~** .

## Leveling Character Type Selection: Fairer Random Selection
  - Because randomly selecting from an array of all characters (numbers, and lowercase letters, and uppercase letters, and special characters) would unfairly slant the likelihood of letter selection (either upper or lowercase) (~57% chance) followed by special characters (far behind by numbers 31% chance), followed far behind by numbers (~11% chance) - this would result in a higher chance of letters and special characters over numbers given repeated password generation over time.
 
   -  To even the odds of characters *type* selection, we've added an initial case selection that essentially states if a user elects to use uppercase letters, lowercase letters, numbers, AND special characters, then generate a random number between between 0 and 3. With each of those numbers representing a different character type, and then only after randomly selecting the character type does the application randomly select a character of that type.

  - This evens the chance likelihood of character types selected because it removes the number of options per type as a factor and weight.  Instead of ~11% chance of selection for numbers, and ~31% chance for special characters, and so on - the final % likelihood is leveled to 1 in 4 or 25%.  

  -  If the user selects less variety in character types, the percent-chance of character type increases.  For example, if a user elected to include just numbers and lowercase letters for their password. Instead of 27% (or approximately 10 out of 36) chance of selection for numbers in an array with letters, this method would provide both the numbers character type and letters character type equal chance of selection: 50%.

  - Note that by it's very essence, randomness also means that a password that has elected use of the four types described *could* still return a password with just numbers, or just lowercase letters.  But, this method of leveling the chances of character type selection  prior to random selection of the character of the selected type ensures a far fairer representative chance of diversity in the characters selected when the user elects greater diversity of character types to include. 

## Reviewing the Deployed Application

-  You can review the deployed application at [https://srmchartroom.github.io/Random-Password-Generator/Develop/index.html](https://srmchartroom.github.io/Random-Password-Generator/Develop/index.html).
