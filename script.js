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

//Set password equal to null

password = "";

// Create arrays to be used to construct the password.

var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "_", "-"];

//Other arrays are concatenated below.

var lowerUpper = lowers.concat(uppers);
  console.log(lowerUpper);

var lowerNumber = lowers.concat(numbers);
  console.log(lowerNumber);

var lowerSpecial = lowers.concat(special);
  console.log(lowerSpecial);

var upperNumber = uppers.concat(numbers);
  console.log(upperNumber);

var upperSpecial = uppers.concat(special);
  console.log(upperSpecial);

var numberSpecial = numbers.concat(special);
  console.log(numberSpecial);

var notSpecial = lowers.concat(upperNumber);
  console.log(notSpecial);

var notNumber = lowers.concat(upperSpecial);
  console.log(notNumber);

var notUpper = lowers.concat(numberSpecial);
  console.log(notUpper);

var notLower = uppers.concat(numberSpecial);
  console.log(notLower);

var allTypes = lowerUpper.concat(numberSpecial);
  console.log(allTypes);


// creating the function to generate the password

function generatePassword () {

  // Prompt for password length.

  var passwordLength = parseInt(prompt("How many characters long would you like your password to be? \nNOTE: The password must be between and including 8 to 128 characters in length.")); 

  while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
    alert("Invalid length. Please choose a number between 8 and 128.");
    var passwordLength = parseInt(prompt("How many characters long would you like your password to be? \nNOTE: The password must be between and including 8 to 128 characters in length."));  
}
// Prompt for the various character types.

var selectLowerCase = confirm("Would you like to include lower case letters?");

var selectUpperCase = confirm("would you like to include upper case letters?");

var selectNumbers = confirm("Would you like to include numbers?");

var selectSpecial = confirm("Would you like to include special characters?");

//Make an array name that changes based upon the case:
    // Case 1: Only lower case selected.
      // In this case we do not need any other arrays other than "lowers", so no concatenation necessary.

      if(selectLowerCase && !selectUpperCase && !selectNumbers && !selectSpecial) {

        myArray = lowers;
      }

    // Case 2: Only upper case selected.
      // In this case we do not need any other arrays other than "uppers", so no concatenation necessary.      
    
      if(!selectLowerCase && selectUpperCase && !selectNumbers && !selectSpecial) {
      
        myArray = uppers;
      }
        
    // Case 3: Only numbers selected
      // In this case we do not need any other arrays other than "numbers", so no concatenation necessary.

      if(!selectLowerCase && !selectUpperCase && selectNumbers && !selectSpecial) {
      
        myArray = numbers;
      }
        
    // Case 4: Only special selected
      // In this case we do not need any other arrays other than "specials", so no concatenation necessary.
        
      if(!selectLowerCase && !selectUpperCase && !selectNumbers && selectSpecial) {
      
        myArray = special;
      }
        
    // Case 5: Only lower and upper selected
        
      if(selectLowerCase && selectUpperCase && !selectNumbers && !selectSpecial) {
      
        myArray = lowerUpper;
      }
        
    // Case 6: Only lower and numbers selected
        
      if(selectLowerCase && !selectUpperCase && selectNumbers && !selectSpecial) {
      
        myArray = lowerNumber;
      }
        
    // Case 7: Only lower and special selected
        
      if(selectLowerCase && !selectUpperCase && !selectNumbers && selectSpecial) {
        
        myArray = lowerSpecial;
      }
        
    // Case 8: Only upper and numbers selected
        
      if(!selectLowerCase && selectUpperCase && selectNumbers && !selectSpecial) {
      
        myArray = upperNumber;
      }
        
    // Case 9: Only upper ans special selected
        
      if(!selectLowerCase && selectUpperCase && !selectNumbers && selectSpecial) {
      
        myArray = upperSpecial;
      }
        
    // Case 10: Only numbers and special selected
        
      if(!selectLowerCase && !selectUpperCase && selectNumbers && selectSpecial) {
      
        myArray = numberSpecial;
      }
        
    // Case 11: Only lower, upper, and numbers selected
        
      if(selectLowerCase && selectUpperCase && selectNumbers && !selectSpecial) {
        
        myArray = notSpecial;
      }
        
    // Case 12: Only lower, upper, and special selected
        
      if(selectLowerCase && selectUpperCase && !selectNumbers && selectSpecial) {
        
        myArray = notNumber;
      }
        
    // Case 13: Only lower, numbers, and special selected
        
      if(selectLowerCase && !selectUpperCase && selectNumbers && selectSpecial) {
      
        myArray = notUpper;
      }
        
    // Case 14: Only upper, numbers, and special selected
        
      if(!selectLowerCase && selectUpperCase && selectNumbers && selectSpecial) {
      
        myArray = notLower;
      }
        
    // Case 15: All four sets selected

      if(selectLowerCase && selectUpperCase && selectNumbers && selectSpecial) {
        
        myArray = allTypes;
      }

// Generate the characters by randomly picking from the selected arrays.

for (var i = 0; i < passwordLength; i++) {
  var RandomIndex = Math.floor(Math.random() * myArray.length);
   password = password + myArray[RandomIndex];
   console.log(password);
   console.log(RandomIndex);
}
return password;
}



