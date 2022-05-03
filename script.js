// Assignment Code
var generateBtn = document.querySelector("#generate");

var useLowercase =  'abcdefghijklmnopqrstuvwyz';
var useUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
var useNumbers = '1234567890';
var useSpecialChar = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';

var selectedChars = '';


// Write password to the #password input
function writePassword() {

var characterLength = prompt("Choose a password length between 8-128 character.");

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  if(confirm("Do you want to include lowercase in your password?")){
    selectedChars +=  useLowercase; 
  }
  if(confirm("Do you want to include uppercase in your password?")){
    selectedChars += useUppercase;
  }
  if(confirm("Do you want to include numeric in your password?")){
    selectedChars += useNumbers;
  }
  if(confirm("Do you want to include special characters in your password?")){
    selectedChars += useSpecialChar;
  }

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page


  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
